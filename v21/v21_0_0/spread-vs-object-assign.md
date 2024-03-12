## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,013|90|
|{...smallObject} - Total keys: 2|112,783,262|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,222|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,246|99|
|{ ...bigObject, ...anotherBigObject }|1,265|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,707,044|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,824,021|97|
|{ ...smallObject, ...anotherSmallObject }|24,592,468|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2013.3496995792532,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":112783262.11434326,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.6484758080114,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6246.294571543984,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1265.1323621429199,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14707043.672033217,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36824020.637436315,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24592468.15548503,"samples":5}]}-->
