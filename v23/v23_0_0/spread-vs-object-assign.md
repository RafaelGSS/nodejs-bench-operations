## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,980|1491|
|{...smallObject} - Total keys: 2|36,911,516|18469756|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,045|523|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,732|3367|
|{ ...bigObject, ...anotherBigObject }|1,416|709|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,861,920|5930997|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,620,316|13310173|
|{ ...smallObject, ...anotherSmallObject }|19,538,337|9770840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:53:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1491,"opsSec":2980.830423490057},{"name":"{...smallObject} - Total keys: 2","samples":18469756,"opsSec":36911516.386573575},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":523,"opsSec":1045.2963357750536},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3367,"opsSec":6732.944005062246},{"name":"{ ...bigObject, ...anotherBigObject }","samples":709,"opsSec":1416.315938031779},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5930997,"opsSec":11861920.432369478},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13310173,"opsSec":26620316.770892184},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9770840,"opsSec":19538337.381240815}]}-->
