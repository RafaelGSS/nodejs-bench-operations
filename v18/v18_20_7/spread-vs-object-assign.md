## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,658|831|
|{...smallObject} - Total keys: 2|37,867,759|18934686|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,018|510|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,030|3016|
|{ ...bigObject, ...anotherBigObject }|1,074|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,686,525|5843372|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,338,167|13671922|
|{ ...smallObject, ...anotherSmallObject }|18,669,416|9340012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:48:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1658.639529966706},{"name":"{...smallObject} - Total keys: 2","samples":18934686,"opsSec":37867759.06067057},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":510,"opsSec":1018.3666620780263},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3016,"opsSec":6030.805779839476},{"name":"{ ...bigObject, ...anotherBigObject }","samples":538,"opsSec":1074.7843823209262},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5843372,"opsSec":11686525.204875113},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13671922,"opsSec":27338167.994884565},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9340012,"opsSec":18669416.485618867}]}-->
