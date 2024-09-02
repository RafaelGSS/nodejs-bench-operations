## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,805,073|5903977|
|Object.create({})|1,988,784|997190|
|Cached Empty.prototype|14,833,993|7416997|
|Empty.prototype|2,032,875|1016439|
|Empty class|1,264,240|632121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:27:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":11805073.420361213,"samples":5903977},{"name":"Object.create({})","opsSec":1988784.8204023985,"samples":997190},{"name":"Cached Empty.prototype","opsSec":14833993.733042205,"samples":7416997},{"name":"Empty.prototype","opsSec":2032875.4792315704,"samples":1016439},{"name":"Empty class","opsSec":1264240.5941623277,"samples":632121}]}-->
