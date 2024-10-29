## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,181,346|23640051|
|Object.create({})|1,302,053|664397|
|Cached Empty.prototype|122,985,092|61493478|
|Empty.prototype|1,445,231|736953|
|Empty class|916,018|469215|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:16:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":47181346.72317373,"samples":23640051},{"name":"Object.create({})","opsSec":1302053.1740810329,"samples":664397},{"name":"Cached Empty.prototype","opsSec":122985092.28391154,"samples":61493478},{"name":"Empty.prototype","opsSec":1445231.1343772733,"samples":736953},{"name":"Empty class","opsSec":916018.4006830015,"samples":469215}]}-->
