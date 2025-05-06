## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,738|870|
|{...smallObject} - Total keys: 2|38,554,042|19280726|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,045|523|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,673|3337|
|{ ...bigObject, ...anotherBigObject }|1,095|549|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,924,687|5962345|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,757,569|14382152|
|{ ...smallObject, ...anotherSmallObject }|20,103,637|10055952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":870,"opsSec":1738.7565386938925},{"name":"{...smallObject} - Total keys: 2","samples":19280726,"opsSec":38554042.22151736},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":523,"opsSec":1045.2226365685049},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3337,"opsSec":6673.680490872819},{"name":"{ ...bigObject, ...anotherBigObject }","samples":549,"opsSec":1095.3849174818608},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5962345,"opsSec":11924687.73430933},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14382152,"opsSec":28757569.379857212},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10055952,"opsSec":20103637.303926077}]}-->
