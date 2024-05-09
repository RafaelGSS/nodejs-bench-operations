## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|11,961,965|5980983|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,478|1240|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,874|3438|
|{ ...bigObject, ...anotherBigObject }|1,401|701|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,953,303|3476652|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,322,749|5161375|
|{ ...smallObject, ...anotherSmallObject }|8,776,918|4388460|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.830926619197,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":11961965.545449832,"samples":5980983},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2478.556781000384,"samples":1240},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6874.999247609868,"samples":3438},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1401.134650832828,"samples":701},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6953303.332478911,"samples":3476652},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10322749.174181664,"samples":5161375},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8776918.841430452,"samples":4388460}]}-->
