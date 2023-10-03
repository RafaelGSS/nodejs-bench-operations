const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Private Property')

const kWidth = Symbol('width')
const kHeight = Symbol('height')
const PrivateSymbol = require('privsym')
const pkWidth = PrivateSymbol('width')
const pkHeight = PrivateSymbol('height')

class A {
  #foo = 0

  foo() {
    return this.#foo
  }
}

class B {
  _foo = 0

  foo() {
    return this._foo
  }
}

class B2 {
  constructor() {
    this._width = 20
    this._height = 10
    this.publicField = 0
  }
  get dimension() {
    return {
      width: this._width,
      height: this._height,
    }
  }
  increaseSize() {
    this._width++
    this._height++
  }
}

class A2 {
  #width = 20
  #height = 10
  publicField = 0

  get dimension() {
    return {
      width: this.#width,
      height: this.#height,
    }
  }
  increaseSize() {
    this.#width++
    this.#height++
  }
}

class SymbolClass {
  constructor() {
    this[kWidth] = 20
    this[kHeight] = 10
    this.publicField = 0
  }
  get dimension() {
    return {
      width: this[kWidth],
      height: this[kHeight],
    }
  }
  increaseSize() {
    this[kWidth]++
    this[kHeight]++
  }
}

class PrivateSymbolClass {
  constructor() {
    this[pkWidth] = 20
    this[pkHeight] = 10
    this.publicField = 0
  }
  get dimension() {
    return {
      width: this[pkWidth],
      height: this[pkHeight],
    }
  }
  increaseSize() {
    this[pkWidth]++
    this[pkHeight]++
  }
}

suite
  .add('Raw usage private field', function () {
    const a = new A()
    a.foo()
  })
  .add('Raw usage underscore usage', function () {
    const b = new B()
    b.foo()
  })
  .add('Manipulating private properties using #', function () {
    const a = new A2()
    a.publicField
    a.dimension
    a.increaseSize()
    a.dimension
  })
  .add('Manipulating private properties using underscore(_)', function () {
    const b = new B2()
    b.publicField
    b.dimension
    b.increaseSize()
    b.dimension
  })
  .add('Manipulating private properties using Symbol', function () {
    const b = new SymbolClass()
    b.publicField
    b.dimension
    b.increaseSize()
    b.dimension
  })
  .add('Manipulating private properties using PrivateSymbol', function () {
    const b = new PrivateSymbolClass()
    b.publicField
    b.dimension
    b.increaseSize()
    b.dimension
  })
  .run({ async: true })
