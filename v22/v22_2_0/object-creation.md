## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,947,407|6473704|
|Object.create({})|1,905,929|952965|
|Cached Empty.prototype|16,001,405|8000703|
|Empty.prototype|2,517,862|1267986|
|Empty class|1,503,754|751878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12947407.87052884,"samples":6473704},{"name":"Object.create({})","opsSec":1905929.5235179707,"samples":952965},{"name":"Cached Empty.prototype","opsSec":16001405.839980504,"samples":8000703},{"name":"Empty.prototype","opsSec":2517862.470568615,"samples":1267986},{"name":"Empty class","opsSec":1503754.604514571,"samples":751878}]}-->
