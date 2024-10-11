## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,429,518|21244475|
|Object.create({})|1,961,724|993925|
|Cached Empty.prototype|110,933,554|55501858|
|Empty.prototype|2,550,927|1283929|
|Empty class|1,564,183|791496|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:13:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":42429518.21011177,"samples":21244475},{"name":"Object.create({})","opsSec":1961724.781230803,"samples":993925},{"name":"Cached Empty.prototype","opsSec":110933554.7421007,"samples":55501858},{"name":"Empty.prototype","opsSec":2550927.413129383,"samples":1283929},{"name":"Empty class","opsSec":1564183.2315907858,"samples":791496}]}-->
