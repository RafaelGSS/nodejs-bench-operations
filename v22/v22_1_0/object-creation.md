## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,092,437|6546219|
|Object.create({})|1,804,951|902476|
|Cached Empty.prototype|16,029,520|8014761|
|Empty.prototype|2,520,674|1270328|
|Empty class|1,530,523|765262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:58:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13092437.293012245,"samples":6546219},{"name":"Object.create({})","opsSec":1804951.779794551,"samples":902476},{"name":"Cached Empty.prototype","opsSec":16029520.236770982,"samples":8014761},{"name":"Empty.prototype","opsSec":2520674.4873054917,"samples":1270328},{"name":"Empty class","opsSec":1530523.9602080784,"samples":765262}]}-->
