## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,701,664|6350833|
|Object.create({})|1,938,351|969182|
|Cached Empty.prototype|15,099,375|7549688|
|Empty.prototype|2,120,079|1060044|
|Empty class|1,323,167|661584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:04:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12701664.856851768,"samples":6350833},{"name":"Object.create({})","opsSec":1938351.7961369234,"samples":969182},{"name":"Cached Empty.prototype","opsSec":15099375.818809267,"samples":7549688},{"name":"Empty.prototype","opsSec":2120079.74440901,"samples":1060044},{"name":"Empty class","opsSec":1323167.8094633762,"samples":661584}]}-->
