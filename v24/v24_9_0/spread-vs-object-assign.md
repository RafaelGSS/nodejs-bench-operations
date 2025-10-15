## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,058|1530|
|{...smallObject} - Total keys: 2|40,841,740|20420981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,094|548|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,189|3095|
|{ ...bigObject, ...anotherBigObject }|1,518|760|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,489,273|6244644|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,859,209|13929840|
|{ ...smallObject, ...anotherSmallObject }|20,392,377|10198596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1530,"opsSec":3058.957213721671},{"name":"{...smallObject} - Total keys: 2","samples":20420981,"opsSec":40841740.22935055},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":548,"opsSec":1094.007521297716},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3095,"opsSec":6189.511412348133},{"name":"{ ...bigObject, ...anotherBigObject }","samples":760,"opsSec":1518.703573881192},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6244644,"opsSec":12489273.937077548},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13929840,"opsSec":27859209.68082217},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10198596,"opsSec":20392377.44125563}]}-->
