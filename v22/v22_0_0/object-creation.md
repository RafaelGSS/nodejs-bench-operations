## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,183,281|6591641|
|Object.create({})|1,736,539|868271|
|Cached Empty.prototype|16,082,988|8041495|
|Empty.prototype|2,675,979|1341360|
|Empty class|1,548,199|774100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:05:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13183281.920893177,"samples":6591641},{"name":"Object.create({})","opsSec":1736539.912679803,"samples":868271},{"name":"Cached Empty.prototype","opsSec":16082988.713387936,"samples":8041495},{"name":"Empty.prototype","opsSec":2675979.0322025144,"samples":1341360},{"name":"Empty class","opsSec":1548199.0277323655,"samples":774100}]}-->
