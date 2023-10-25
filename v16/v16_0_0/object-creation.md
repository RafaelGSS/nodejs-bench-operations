## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,525,718|89|
|Object.create({})|1,285,906|83|
|Cached Empty.prototype|597,382,270|97|
|Empty.prototype|1,463,958|78|
|Empty class|846,156|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":47525718.287965804,"samples":6},{"name":"Object.create({})","opsSec":1285906.335072969,"samples":3},{"name":"Cached Empty.prototype","opsSec":597382270.2489673,"samples":7},{"name":"Empty.prototype","opsSec":1463957.7119818646,"samples":3},{"name":"Empty class","opsSec":846156.1576100177,"samples":4}]}-->
