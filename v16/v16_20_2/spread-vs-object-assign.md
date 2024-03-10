## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,952|90|
|{...smallObject} - Total keys: 2|95,227,507|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,083|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,624|96|
|{ ...bigObject, ...anotherBigObject }|1,184|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,956,364|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,929,193|98|
|{ ...smallObject, ...anotherSmallObject }|21,571,633|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1952.2573250332384,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":95227507.47957559,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2082.669525465009,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5623.746141792667,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1184.287164029494,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12956363.787700785,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31929193.32616937,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21571632.63164823,"samples":5}]}-->
