const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

class Base {
  foo () {
    return 10 * 1e2
  }
}

class SuperClass extends Base {
  bar () {
    const tmp = 20 * 23
    return super.foo() + tmp
  }
}

class ThisClass extends Base {
  bar () {
    const tmp = 20 * 23
    return this.foo() + tmp
  }
}

suite.add('Using super', function () {
  const cls = new SuperClass()
  const value = cls.bar()
})
.add('Using this', function () {
  const cls = new ThisClass()
  const value = cls.bar()
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run();
