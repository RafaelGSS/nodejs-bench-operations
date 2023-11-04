## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,132|93|
|{...smallObject} - Total keys: 2|60,551,923|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,102|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,042|95|
|{ ...bigObject, ...anotherBigObject }|700|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,928,371|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,785,646|92|
|{ ...smallObject, ...anotherSmallObject }|11,736,774|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:46:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1132.4655259328479,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":60551922.738095306,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1102.1565893076277,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3041.5611589634555,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":700.4456212632748,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6928371.150590653,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16785645.62538187,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11736773.60942684,"samples":6}]}-->
