## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,063|93|
|{...smallObject} - Total keys: 2|112,441,528|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,176|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,479|100|
|{ ...bigObject, ...anotherBigObject }|1,238|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,311,938|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,198,080|96|
|{ ...smallObject, ...anotherSmallObject }|25,714,171|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:19:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2062.807507367566,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":112441528.1949085,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1175.7149733001668,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6478.833156595264,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1237.8353609297528,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15311937.907751193,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38198079.80238314,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25714170.93058486,"samples":5}]}-->
