## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,917,144|83|
|Object.create({})|1,259,866|72|
|Cached Empty.prototype|694,254,438|88|
|Empty.prototype|1,146,999|71|
|Empty class|836,984|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":39917143.84048923,"samples":5},{"name":"Object.create({})","opsSec":1259865.6250909918,"samples":4},{"name":"Cached Empty.prototype","opsSec":694254437.9935118,"samples":6},{"name":"Empty.prototype","opsSec":1146998.5844060676,"samples":3},{"name":"Empty class","opsSec":836983.7235142897,"samples":3}]}-->
