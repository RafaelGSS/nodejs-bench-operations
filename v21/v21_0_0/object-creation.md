## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,942,942|5971472|
|Object.create({})|1,731,556|866614|
|Cached Empty.prototype|15,058,999|7529500|
|Empty.prototype|2,050,091|1025046|
|Empty class|1,184,285|592143|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":11942942.334014984,"samples":5971472},{"name":"Object.create({})","opsSec":1731556.206299975,"samples":866614},{"name":"Cached Empty.prototype","opsSec":15058999.190601557,"samples":7529500},{"name":"Empty.prototype","opsSec":2050091.720715716,"samples":1025046},{"name":"Empty class","opsSec":1184285.9022232878,"samples":592143}]}-->
