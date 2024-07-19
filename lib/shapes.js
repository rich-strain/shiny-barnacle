// Parent Class
class Shape {
  constructor(fillColor, text, textColor) {
    this.color = fillColor;
    this.text = text;
    this.textColor = textColor;
  }

  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  // Possibly add switch to render different shapes?

  renderShape() {
    return '';
  }
  rendertTxt() {
    return '';
  }
  renderSVG() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.renderShape()}
        ${this.renderTxt()}
    </svg>`;
  }
}
const leroy = new Shape('beans', 'burrito', 'rice');

// CHILD CLASSES
class Circle extends Shape {
  constructor() {
    super();
  }
  renderShape() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
  renderTxt() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`; // Duplicate method?
  }
  //call renderSVG method from parent class
  renderSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
         ${this.renderShape()}
         ${this.renderTxt()}
      </svg>`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
  renderShape() {
    return `<rect width="150" height="150" x="75" y="25" fill="${this.color}" />`;
  }
  renderTxt() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
  renderSVG() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${this.renderShape()}
      ${this.renderTxt()}
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(fillColor, text, textColor) {
    // Creates Object
    super(fillColor, text, textColor);
  }
  renderShape() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
  renderTxt() {
    return `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
  renderSVG() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${this.renderShape()}
      ${this.renderTxt()}
    </svg>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
