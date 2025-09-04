## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,682|842|
|{...smallObject} - Total keys: 2|39,599,591|19808107|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,033|519|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,649|3325|
|{ ...bigObject, ...anotherBigObject }|1,097|549|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,308,663|6155239|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,447,376|14223691|
|{ ...smallObject, ...anotherSmallObject }|20,105,322|10059972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:18:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":842,"opsSec":1682.984046484531},{"name":"{...smallObject} - Total keys: 2","samples":19808107,"opsSec":39599591.121236674},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":519,"opsSec":1033.3330134447576},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3325,"opsSec":6649.086668157089},{"name":"{ ...bigObject, ...anotherBigObject }","samples":549,"opsSec":1097.358764989831},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6155239,"opsSec":12308663.826038681},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14223691,"opsSec":28447376.196735255},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10059972,"opsSec":20105322.12301153}]}-->
