## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,831,664|91|
|Object.create({})|1,705,280|85|
|Cached Empty.prototype|594,582,388|93|
|Empty.prototype|1,588,792|82|
|Empty class|1,041,748|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":57831664.10615759,"samples":6},{"name":"Object.create({})","opsSec":1705280.1462172822,"samples":4},{"name":"Cached Empty.prototype","opsSec":594582388.0398751,"samples":6},{"name":"Empty.prototype","opsSec":1588791.5314290123,"samples":4},{"name":"Empty class","opsSec":1041748.0535464233,"samples":3}]}-->
