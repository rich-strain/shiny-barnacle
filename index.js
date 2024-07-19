const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: colors.green('What is the text for your logo?'),
  },
  {
    type: 'input',
    name: 'textColor',
    message: colors.blue('What is the color for your logo text?'),
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
