const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Property access after shape transition')

suite
  .add('Adding property after object creation - small object', function () {
    const obj = { a: 1, b: {}, c: '' }
    obj.d = true
    console.assert(obj.d)
  })
  .add('Adding property in the object creation - small object', function () {
    const obj = { a: 1, b: {}, c: '', d: true }
    console.assert(obj.d)
  })
  .add('Adding property after the function creation - small class', function () {
    function Klass() {
      this.a = 1
      this.b = {}
      this.c = ''
    }
    const obj = new Klass()
    obj.d = true
    console.assert(obj.d)
  })
  .add('Adding property in the function creation - small class', function () {
    function Klass() {
      this.a = 1
      this.b = {}
      this.c = ''
      this.d = true
    }
    const obj = new Klass()
    console.assert(obj.d)
  })
  .add('Adding property after the class creation - small class', function () {
    class Klass {
      constructor() {
        this.a = 1
        this.b = {}
        this.c = ''
      }
    }
    const obj = new Klass()
    obj.d = true
    console.assert(obj.d)
  })
  .add('Adding property in the class creation - small class', function () {
    class Klass {
      constructor() {
        this.a = 1
        this.b = {}
        this.c = ''
        this.d = true
      }
    }
    const obj = new Klass()
    console.assert(obj.d)
  })
  .run({ async: false })
