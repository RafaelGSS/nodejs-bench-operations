## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,542,920|91|
|Object.create({})|2,476,118|81|
|Cached Empty.prototype|143,462,603|83|
|Empty.prototype|2,596,795|91|
|Empty class|1,701,892|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:52:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":56542920.490159005,"samples":6},{"name":"Object.create({})","opsSec":2476117.7888551094,"samples":3},{"name":"Cached Empty.prototype","opsSec":143462603.2015119,"samples":5},{"name":"Empty.prototype","opsSec":2596795.382710834,"samples":3},{"name":"Empty class","opsSec":1701892.3777312064,"samples":3}]}-->
