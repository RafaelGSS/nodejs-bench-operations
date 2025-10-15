## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,804|903|
|{...smallObject} - Total keys: 2|40,815,434|20414822|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,067|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,866|3434|
|{ ...bigObject, ...anotherBigObject }|1,123|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,184,451|6093101|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,045,027|14022948|
|{ ...smallObject, ...anotherSmallObject }|20,846,838|10431946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":903,"opsSec":1804.1831695064755},{"name":"{...smallObject} - Total keys: 2","samples":20414822,"opsSec":40815434.59623054},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":534,"opsSec":1067.3580737767015},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3434,"opsSec":6866.5935980324375},{"name":"{ ...bigObject, ...anotherBigObject }","samples":566,"opsSec":1123.0413976968464},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6093101,"opsSec":12184451.167473942},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14022948,"opsSec":28045027.89420656},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10431946,"opsSec":20846838.535591695}]}-->
