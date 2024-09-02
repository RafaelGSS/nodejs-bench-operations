import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Property Getter Access')

class TestGetter {
  get test() {
    return 'Hello'
  }
}

const classGetter = new TestGetter()

const getterObj = {
  get test() {
    return 'Hello'
  },
}

const methodObj = {
  test() {
    return 'Hello'
  },
}

const defineObj = {}

Object.defineProperty(defineObj, 'test', {
  get() {
    return 'Hello'
  },
})

const defineEnumerableFalseObj = {}

Object.defineProperty(defineEnumerableFalseObj, 'test', {
  get() {
    return 'Hello'
  },
  enumerable: false,
})

const defineConfigFalseObj = {}

Object.defineProperty(defineConfigFalseObj, 'test', {
  get() {
    return 'Hello'
  },
  enumerable: true,
  configurable: false,
})

const defineEnumerableFalseAndConfigFalseObj = {}

Object.defineProperty(defineEnumerableFalseAndConfigFalseObj, 'test', {
  get() {
    return 'Hello'
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

const definePropertiesObj = {}

Object.defineProperties(definePropertiesObj, {
  test: {
    get() {
      return 'Hello'
    },
  },
})

const definePropertiesEnumerableFalseObj = {}

Object.defineProperties(definePropertiesEnumerableFalseObj, {
  test: {
    get() {
      return 'Hello'
    },
    enumerable: false,
  },
})

const definePropertiesEnumerableFalseAndConfigFalseObj = {}

Object.defineProperties(definePropertiesEnumerableFalseAndConfigFalseObj, {
  test: {
    get() {
      return 'Hello'
    },
    enumerable: false,
    configurable: false,
  },
})

suite
  .add('Getter (class)', function () {
    const v = classGetter.test
    return v
  })
  .add('Getter', function () {
    const v = getterObj.test
    return v
  })
  .add('Method', function () {
    const v = methodObj.test()
    return v
  })
  .add('DefineProperty (getter)', function () {
    const v = defineObj.test
    return v
  })
  .add('DefineProperty (getter & enumerable=false)', function () {
    const v = defineEnumerableFalseObj.test
    return v
  })
  .add('DefineProperty (getter & configurable=false)', function () {
    const v = defineConfigFalseObj.test
    return v
  })
  .add('DefineProperty (getter & enumerable=false & configurable=false)', function () {
    const v = defineEnumerableFalseAndConfigFalseObj.test
    return v
  })
  .add('DefineProperty (writable)', function () {
    const v = defineOnlyWritableObj.test
    return v
  })
  .add('DefineProperty (writable & enumerable=false)', function () {
    const v = defineWritableEnumerableFalseObj.test
    return v
  })
  .add('DefineProperty (writable & enumerable=false & configurable=false)', function () {
    const v = defineWritableEnumerableFalseAndConfigFalseObj.test
    return v
  })
  .add('DefineProperties (getter)', function () {
    const v = definePropertiesObj.test
    return v
  })
  .add('DefineProperties (getter & enumerable=false)', function () {
    const v = definePropertiesEnumerableFalseObj.test
    return v
  })
  .add('DefineProperties (getter & enumerable=false & configurable=false)', function () {
    const v = definePropertiesEnumerableFalseAndConfigFalseObj.test
    return v
  })

await suite.runAndPrintResults()
