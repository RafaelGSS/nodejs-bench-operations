## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,760|881|
|{...smallObject} - Total keys: 2|41,014,726|20515006|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,049|526|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,270|3136|
|{ ...bigObject, ...anotherBigObject }|1,107|554|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,931,381|5965694|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,565,057|13783084|
|{ ...smallObject, ...anotherSmallObject }|19,262,032|9631101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:39:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":881,"opsSec":1760.6759787067165},{"name":"{...smallObject} - Total keys: 2","samples":20515006,"opsSec":41014726.05768666},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":526,"opsSec":1049.8869010333851},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3136,"opsSec":6270.4188386448095},{"name":"{ ...bigObject, ...anotherBigObject }","samples":554,"opsSec":1107.7229518434062},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5965694,"opsSec":11931381.437740209},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13783084,"opsSec":27565057.128197733},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9631101,"opsSec":19262032.571161505}]}-->
