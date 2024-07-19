const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// Create Array of The 16 Valid Color Strings
const validColors = [
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'pink',
  'black',
  'white',
  'gray',
  'brown',
  'cyan',
  'magenta',
  'silver',
  'gold',
  'lime',
];
// Validate Color Input
const validateColor = (input) => {
  if (/^#[0-9A-Fa-f]{6}$/.test(input) || validColors.includes(input.toLowerCase())) {
    return true;
  } else {
    return 'Please enter a valid color keyword or a hexadecimal value (e.g., #FF0000).';
  }
};

const questions = [
  {
    type: 'input',
    name: 'text',
    message: colors.green('What is the text for your logo?'),
    validate: function (input) {
      // Validate Function Inside Inquirer Prompt
      if (input.length <= 3) {
        return true;
      } else {
        return 'Logo text must be 3 characters or less.';
      }
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: colors.blue('What is the color for your logo text?'),
    validate: validateColor,
  },
  {
    type: 'list',
    name: 'shape',
    message: colors.green('What is the shape of your logo.'),
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'fillColor',
    message: colors.blue('What is the color of your logo?'),
    validate: validateColor,
  },
];

// Write SVG file to output folder
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log('Your SVG Logo has been created!')));
}
// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    let logo;

    switch (data.shape) {
      case 'Triangle':
        logo = new Triangle(data.fillColor, data.text, data.textColor);
        break;
      case 'Square':
        logo = new Square();
        logo.setColor(data.fillColor);
        logo.setText(data.text);
        logo.setTextColor(data.textColor);
        break;
      case 'Circle':
        logo = new Circle();
        logo.setColor(data.fillColor);
        logo.setText(data.text);
        logo.setTextColor(data.textColor);
        break;
    }

    writeToFile('./examples/logo.svg', logo.renderSVG());
  });
}

// Function call to initialize app
init();
