class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return ''; // Default render method
  }
  renderSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${this.render()}
    </svg>`;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
  //call renderSVG method from parent class
  renderSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.render()}
        </svg>`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<rect width="150" height="150" fill="${this.color}" />`;
  }

  renderSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${this.render()}
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
  renderSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${this.render()}
    </svg>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };
