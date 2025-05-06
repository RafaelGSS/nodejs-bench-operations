## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,880|1441|
|{...smallObject} - Total keys: 2|36,797,161|18429555|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,115|558|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,464|3233|
|{ ...bigObject, ...anotherBigObject }|1,501|751|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,917,953|5958978|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,457,786|12729640|
|{ ...smallObject, ...anotherSmallObject }|19,832,138|9916109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:52:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1441,"opsSec":2880.6800723908304},{"name":"{...smallObject} - Total keys: 2","samples":18429555,"opsSec":36797161.97781036},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":558,"opsSec":1115.270118162789},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3233,"opsSec":6464.068613867},{"name":"{ ...bigObject, ...anotherBigObject }","samples":751,"opsSec":1501.4586070583841},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5958978,"opsSec":11917953.330378452},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":12729640,"opsSec":25457786.493497573},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9916109,"opsSec":19832138.1954759}]}-->
