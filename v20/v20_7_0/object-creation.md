## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,722,387|88|
|Object.create({})|1,706,380|83|
|Cached Empty.prototype|597,528,742|96|
|Empty.prototype|1,659,578|78|
|Empty class|1,065,534|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":54722386.7137612,"samples":6},{"name":"Object.create({})","opsSec":1706379.931757825,"samples":3},{"name":"Cached Empty.prototype","opsSec":597528741.5277704,"samples":9},{"name":"Empty.prototype","opsSec":1659577.8194882893,"samples":3},{"name":"Empty class","opsSec":1065534.3480722527,"samples":5}]}-->
