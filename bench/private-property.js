const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

class A {
  #foo = 0;

  foo () {
    return this.#foo
  }
}

class B {
  _foo = 0;

  foo () {
    return this._foo
  }
}

class B2 {
  constructor() {
    this._width = 20;
    this._height = 10;
    this.publicField = 0;
  }
  get dimension() {
    return {
      width: this._width, 
      height: this._height
    };
  }
  increaseSize() {
    this._width++;
    this._height++;
  }
}

class A2 {
  #width = 20;
  #height = 10;
  publicField = 0;
  
  get dimension() {
    return {
      width: this.#width,
      height: this.#height
    };
  }
  increaseSize() {
    this.#width++;
    this.#height++;
  }
}

suite.add('Raw usage private field', function () {
  const a = new A();
  a.foo()
})
.add('Raw usage underscore usage', function () {
  const b = new B();
  b.foo()
})
.add('Manipulating private properties', function () {
  const a = new A2()
  a.publicField
  a.dimension
  a.increaseSize()
  a.dimension
})
.add('Manipulating underscore properties', function () {
  const b = new B2();
  b.publicField
  b.dimension
  b.increaseSize()
  b.dimension
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': true });
