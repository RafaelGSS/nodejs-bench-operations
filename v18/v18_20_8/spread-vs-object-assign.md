## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,749|875|
|{...smallObject} - Total keys: 2|40,093,931|20059094|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,039|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,153|3078|
|{ ...bigObject, ...anotherBigObject }|1,101|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,835,828|5417916|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,726,465|13881456|
|{ ...smallObject, ...anotherSmallObject }|19,221,888|9615340|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:17:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":875,"opsSec":1749.9400540535084},{"name":"{...smallObject} - Total keys: 2","samples":20059094,"opsSec":40093931.011362396},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1039.2965749777509},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3078,"opsSec":6153.079834453686},{"name":"{ ...bigObject, ...anotherBigObject }","samples":551,"opsSec":1101.738260041562},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5417916,"opsSec":10835828.792594677},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13881456,"opsSec":27726465.00721871},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9615340,"opsSec":19221888.52328988}]}-->
