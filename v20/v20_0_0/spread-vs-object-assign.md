## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,035|94|
|{...smallObject} - Total keys: 2|100,745,196|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,182|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,906|97|
|{ ...bigObject, ...anotherBigObject }|1,228|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,567,329|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,990,407|97|
|{ ...smallObject, ...anotherSmallObject }|24,920,896|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2035.051877468924,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":100745195.85545954,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1181.5579647961233,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5906.329700370342,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1228.3094106533395,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13567328.598475555,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36990406.96079676,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24920896.404538404,"samples":6}]}-->
