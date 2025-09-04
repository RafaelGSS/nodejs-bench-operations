## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,643|825|
|{...smallObject} - Total keys: 2|38,799,123|19422105|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,023|513|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,799|3400|
|{ ...bigObject, ...anotherBigObject }|1,061|531|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,242,639|6122345|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,571,232|14285644|
|{ ...smallObject, ...anotherSmallObject }|20,322,639|10161461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:20:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":825,"opsSec":1643.7363617824283},{"name":"{...smallObject} - Total keys: 2","samples":19422105,"opsSec":38799123.2460372},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":513,"opsSec":1023.7134479745922},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3400,"opsSec":6799.52733765665},{"name":"{ ...bigObject, ...anotherBigObject }","samples":531,"opsSec":1061.4979093658742},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6122345,"opsSec":12242639.872012313},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14285644,"opsSec":28571232.114669986},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10161461,"opsSec":20322639.190153033}]}-->
