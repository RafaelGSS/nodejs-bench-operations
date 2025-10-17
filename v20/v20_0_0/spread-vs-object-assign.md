## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,759|880|
|{...smallObject} - Total keys: 2|38,703,914|19352703|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,056|529|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,603|3302|
|{ ...bigObject, ...anotherBigObject }|1,112|558|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,117,248|6060061|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,457,305|14228666|
|{ ...smallObject, ...anotherSmallObject }|20,506,528|10253342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:05:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":880,"opsSec":1759.9184876153276},{"name":"{...smallObject} - Total keys: 2","samples":19352703,"opsSec":38703914.89297483},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":529,"opsSec":1056.5201955533003},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3302,"opsSec":6603.571348976595},{"name":"{ ...bigObject, ...anotherBigObject }","samples":558,"opsSec":1112.526931226528},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6060061,"opsSec":12117248.128026979},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14228666,"opsSec":28457305.36396218},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10253342,"opsSec":20506528.02734782}]}-->
