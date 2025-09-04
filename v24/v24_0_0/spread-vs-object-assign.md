## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,824|1413|
|{...smallObject} - Total keys: 2|38,681,442|19343596|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,116|559|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,516|3259|
|{ ...bigObject, ...anotherBigObject }|1,497|749|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,989,619|5994813|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,601,469|13801379|
|{ ...smallObject, ...anotherSmallObject }|19,967,269|9984084|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:17:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1413,"opsSec":2824.8019337046694},{"name":"{...smallObject} - Total keys: 2","samples":19343596,"opsSec":38681442.93186281},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":559,"opsSec":1116.5198586529002},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3259,"opsSec":6516.693793895952},{"name":"{ ...bigObject, ...anotherBigObject }","samples":749,"opsSec":1497.8979122656874},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5994813,"opsSec":11989619.78937695},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13801379,"opsSec":27601469.06659753},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9984084,"opsSec":19967269.233277272}]}-->
