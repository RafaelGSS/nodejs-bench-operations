## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,176,728|94|
|Object.create({})|1,451,096|76|
|Cached Empty.prototype|715,626,580|98|
|Empty.prototype|1,375,697|74|
|Empty class|952,548|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":50176727.792036094,"samples":5},{"name":"Object.create({})","opsSec":1451096.3499235727,"samples":3},{"name":"Cached Empty.prototype","opsSec":715626579.797154,"samples":6},{"name":"Empty.prototype","opsSec":1375696.7788124494,"samples":3},{"name":"Empty class","opsSec":952548.4561103187,"samples":3}]}-->
