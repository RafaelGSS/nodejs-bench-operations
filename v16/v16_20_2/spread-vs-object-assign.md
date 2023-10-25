## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,101|87|
|{...smallObject} - Total keys: 2|52,668,413|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,132|91|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,070|91|
|{ ...bigObject, ...anotherBigObject }|677|87|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,843,823|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,163,412|93|
|{ ...smallObject, ...anotherSmallObject }|12,984,396|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1101.302936625214,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":52668413.14012615,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1132.093778099815,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3070.1157457377376,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":676.5739778399635,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7843823.352217378,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19163411.982986547,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12984395.660989638,"samples":7}]}-->
