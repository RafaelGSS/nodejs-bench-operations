## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,778,009|96|
|Object.create({})|1,989,370|87|
|Cached Empty.prototype|845,982,728|96|
|Empty.prototype|2,152,255|88|
|Empty class|1,322,309|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:48:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78778008.72230054,"samples":5},{"name":"Object.create({})","opsSec":1989370.2646492273,"samples":3},{"name":"Cached Empty.prototype","opsSec":845982727.5361638,"samples":6},{"name":"Empty.prototype","opsSec":2152255.0629298207,"samples":3},{"name":"Empty class","opsSec":1322309.0071050287,"samples":3}]}-->
