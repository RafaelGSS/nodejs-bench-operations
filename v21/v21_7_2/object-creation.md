## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,368,911|6184456|
|Object.create({})|1,908,167|954085|
|Cached Empty.prototype|14,764,168|7382085|
|Empty.prototype|1,989,332|994667|
|Empty class|1,197,082|598542|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:26:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12368911.134203872,"samples":6184456},{"name":"Object.create({})","opsSec":1908167.2598702346,"samples":954085},{"name":"Cached Empty.prototype","opsSec":14764168.878005017,"samples":7382085},{"name":"Empty.prototype","opsSec":1989332.9854436407,"samples":994667},{"name":"Empty class","opsSec":1197082.9345993986,"samples":598542}]}-->
