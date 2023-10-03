const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Property Setter Access')

class TestSetter {
  privateTest = undefined

  set test(value) {
    this.privateTest = value
  }
}

const classSetterObj = new TestSetter()

const setterObj = {
  privateTest: undefined,
  set test(value) {
    this.privateTest = value
  },
}

const methodObj = {
  privateTest: undefined,
  test(value) {
    this.privateTest = value
  },
}

const defineObj = {
  privateTest: undefined,
}

Object.defineProperty(defineObj, 'test', {
  set(value) {
    this.privateTest = value
  },
})

const defineEnumerableFalseObj = {
  privateTest: undefined,
}

Object.defineProperty(defineEnumerableFalseObj, 'test', {
  set(value) {
    this.privateTest = value
  },
  enumerable: false,
})

const defineConfigFalseObj = {
  privateTest: undefined,
}

Object.defineProperty(defineConfigFalseObj, 'test', {
  set(value) {
    this.privateTest = value
  },
  configurable: false,
})

const defineEnumerableFalseAndConfigFalseObj = {
  privateTest: undefined,
}

Object.defineProperty(defineEnumerableFalseAndConfigFalseObj, 'test', {
  set(value) {
    this.privateTest = value
  },
  enumerable: false,
  configurable: false,
})

const defineOnlyWritableObj = {}

Object.defineProperty(defineOnlyWritableObj, 'test', {
  writable: true,
  value: 'Hello',
})

const defineWritableEnumerableFalseObj = {}

Object.defineProperty(defineWritableEnumerableFalseObj, 'test', {
  writable: true,
  value: 'Hello',
  enumerable: false,
})

const defineWritableEnumerableFalseAndConfigFalseObj = {}

Object.defineProperty(defineWritableEnumerableFalseAndConfigFalseObj, 'test', {
  writable: true,
  value: 'Hello',
  enumerable: false,
  configurable: false,
})

const definePropertiesObj = {
  private: undefined,
}

Object.defineProperties(definePropertiesObj, {
  test: {
    set(value) {
      this.privateTest = value
    },
  },
})

const definePropertiesEnumerableFalseObj = {
  private: undefined,
}

Object.defineProperties(definePropertiesEnumerableFalseObj, {
  test: {
    set(value) {
      this.privateTest = value
    },
    enumerable: false,
  },
})

const definePropertiesEnumerableFalseAndConfigFalseObj = {
  private: undefined,
}

Object.defineProperties(definePropertiesEnumerableFalseAndConfigFalseObj, {
  test: {
    set(value) {
      this.privateTest = value
    },
    enumerable: false,
    configurable: false,
  },
})

suite
  .add('Setter (class)', function () {
    classSetterObj.test = 'Hello'
  })
  .add('Setter', function () {
    setterObj.test = 'Hello'
  })
  .add('Method', function () {
    methodObj.test('Hello')
  })
  .add('DefineProperty (setter)', function () {
    defineObj.test = 'Hello'
  })
  .add('DefineProperty (setter & enumerable=false)', function () {
    defineEnumerableFalseObj.test = 'Hello'
  })
  .add('DefineProperty (setter & configurable=false)', function () {
    defineConfigFalseObj.test = 'Hello'
  })
  .add('DefineProperty (setter & enumerable=false & configurable=false)', function () {
    defineEnumerableFalseAndConfigFalseObj.test = 'Hello'
  })
  .add('DefineProperty (writable)', function () {
    defineOnlyWritableObj.test = 'Hello'
  })
  .add('DefineProperty (writable & enumerable=false)', function () {
    defineWritableEnumerableFalseObj.test = 'Hello'
  })
  .add('DefineProperty (writable & enumerable=false & configurable=false)', function () {
    defineWritableEnumerableFalseAndConfigFalseObj.test = 'Hello'
  })
  .add('DefineProperties (setter)', function () {
    definePropertiesObj.test = 'Hello'
  })
  .add('DefineProperties (setter & enumerable=false)', function () {
    definePropertiesEnumerableFalseObj.test = 'Hello'
  })
  .add('DefineProperties (setter & enumerable=false & configurable=false)', function () {
    definePropertiesEnumerableFalseAndConfigFalseObj.test = 'Hello'
  })
  .run({ async: false })
