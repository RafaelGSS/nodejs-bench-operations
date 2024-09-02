## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,206,025|6103013|
|Object.create({})|1,302,843|651422|
|Cached Empty.prototype|14,752,240|7376121|
|Empty.prototype|1,365,531|682766|
|Empty class|858,352|430075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12206025.373477994,"samples":6103013},{"name":"Object.create({})","opsSec":1302843.3778142931,"samples":651422},{"name":"Cached Empty.prototype","opsSec":14752240.460039847,"samples":7376121},{"name":"Empty.prototype","opsSec":1365531.890980445,"samples":682766},{"name":"Empty class","opsSec":858352.0290582796,"samples":430075}]}-->
