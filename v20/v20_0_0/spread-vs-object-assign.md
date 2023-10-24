## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,082|90|
|{...smallObject} - Total keys: 2|53,683,831|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|662|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,115|91|
|{ ...bigObject, ...anotherBigObject }|690|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,693,448|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,531,653|92|
|{ ...smallObject, ...anotherSmallObject }|14,002,820|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1082.2134886398953,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":53683830.83370621,"samples":9},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":661.9544330136688,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3114.555044785316,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":689.5877281505947,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8693448.149950964,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":21531653.449322607,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14002819.830327727,"samples":9}]}-->
