## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,665|833|
|{...smallObject} - Total keys: 2|37,735,451|18874592|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,034|518|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,510|3256|
|{ ...bigObject, ...anotherBigObject }|1,082|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,087,700|6043915|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,764,131|14382314|
|{ ...smallObject, ...anotherSmallObject }|19,565,040|9784146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:20:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":833,"opsSec":1665.4961141436427},{"name":"{...smallObject} - Total keys: 2","samples":18874592,"opsSec":37735451.465444505},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":518,"opsSec":1034.1499285291598},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3256,"opsSec":6510.495164147759},{"name":"{ ...bigObject, ...anotherBigObject }","samples":542,"opsSec":1082.5010456470777},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6043915,"opsSec":12087700.153924948},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14382314,"opsSec":28764131.416035235},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9784146,"opsSec":19565040.564168803}]}-->
