## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,766,679|5883343|
|Object.create({})|1,138,429|569215|
|Cached Empty.prototype|14,096,528|7048265|
|Empty.prototype|1,214,389|607195|
|Empty class|822,861|411435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:02:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11766679.22694376,"samples":5883343},{"name":"Object.create({})","opsSec":1138429.148814297,"samples":569215},{"name":"Cached Empty.prototype","opsSec":14096528.56921279,"samples":7048265},{"name":"Empty.prototype","opsSec":1214389.8317993658,"samples":607195},{"name":"Empty class","opsSec":822861.1640154376,"samples":411435}]}-->
