## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,884|1443|
|{...smallObject} - Total keys: 2|37,454,068|18738177|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,085|543|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,251|3126|
|{ ...bigObject, ...anotherBigObject }|1,473|738|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,293,358|6147891|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,704,442|13852238|
|{ ...smallObject, ...anotherSmallObject }|19,921,645|9970171|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:17:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1443,"opsSec":2884.181396725383},{"name":"{...smallObject} - Total keys: 2","samples":18738177,"opsSec":37454068.67931953},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":543,"opsSec":1085.0960086853563},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3126,"opsSec":6251.526921951708},{"name":"{ ...bigObject, ...anotherBigObject }","samples":738,"opsSec":1473.660622707876},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6147891,"opsSec":12293358.315234717},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13852238,"opsSec":27704442.20058052},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9970171,"opsSec":19921645.137605455}]}-->
