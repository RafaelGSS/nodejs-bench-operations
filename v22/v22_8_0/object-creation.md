## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,410,218|21206263|
|Object.create({})|1,937,662|986351|
|Cached Empty.prototype|96,865,999|48433783|
|Empty.prototype|2,511,324|1258265|
|Empty class|1,434,015|727098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:24:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":42410218.54482941,"samples":21206263},{"name":"Object.create({})","opsSec":1937662.2079559406,"samples":986351},{"name":"Cached Empty.prototype","opsSec":96865999.09559864,"samples":48433783},{"name":"Empty.prototype","opsSec":2511324.772122173,"samples":1258265},{"name":"Empty class","opsSec":1434015.843589436,"samples":727098}]}-->
