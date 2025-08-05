## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,187|1594|
|{...smallObject} - Total keys: 2|41,109,684|20555068|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,095|549|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,236|3119|
|{ ...bigObject, ...anotherBigObject }|1,514|758|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,360,736|6180371|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,578,668|13789337|
|{ ...smallObject, ...anotherSmallObject }|20,264,418|10132421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:40:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1594,"opsSec":3187.8559917934267},{"name":"{...smallObject} - Total keys: 2","samples":20555068,"opsSec":41109684.36900753},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":549,"opsSec":1095.7119583941444},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3119,"opsSec":6236.039975219549},{"name":"{ ...bigObject, ...anotherBigObject }","samples":758,"opsSec":1514.6733309522322},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6180371,"opsSec":12360736.41294714},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13789337,"opsSec":27578668.263637003},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10132421,"opsSec":20264418.189957973}]}-->
