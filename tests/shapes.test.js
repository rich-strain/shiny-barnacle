//const Shape = require('../lib/shapes.js');
const { Triangle, Square, Circle } = require('../lib/shapes.js'); // Desctructuring?

describe('Validate Shapes', () => {
  describe('Triangle', () => {
    it('Should Render a Triangle For The SVG', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.renderShape()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
  });
  describe('Square', () => {
    it('Should Render a Square For The SVG', () => {
      // Callback function?
      const shape = new Square();
      shape.setColor('red');
      expect(shape.renderShape()).toEqual('<rect width="150" height="150" x="75" y="25" fill="red" />');
    });
  });
  describe('Circle', () => {
    it('Should Render a Circle For The SVG', () => {
      const shape = new Circle();
      shape.setColor('green');
      expect(shape.renderShape()).toEqual('<circle cx="150" cy="100" r="90" fill="green" />');
    });
  });
});
