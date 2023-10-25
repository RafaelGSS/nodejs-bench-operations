## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,006|86|
|{...smallObject} - Total keys: 2|53,339,144|80|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,190|83|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,311|86|
|{ ...bigObject, ...anotherBigObject }|702|83|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,145,789|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,996,711|86|
|{ ...smallObject, ...anotherSmallObject }|12,510,928|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1005.8131382362965,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":53339144.37603457,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1190.0486632530226,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3311.3214097643354,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":701.6851191706257,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8145789.254875216,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19996711.42367018,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12510927.539595718,"samples":6}]}-->
