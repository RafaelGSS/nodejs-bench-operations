## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,015,759|87|
|Object.create({})|1,198,684|71|
|Cached Empty.prototype|613,252,819|89|
|Empty.prototype|1,132,832|65|
|Empty class|803,517|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37015759.26371592,"samples":6},{"name":"Object.create({})","opsSec":1198683.921723666,"samples":6},{"name":"Cached Empty.prototype","opsSec":613252819.2809101,"samples":6},{"name":"Empty.prototype","opsSec":1132831.7248301355,"samples":3},{"name":"Empty class","opsSec":803516.9239285291,"samples":3}]}-->
