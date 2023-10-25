## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,588,547|86|
|Object.create({})|1,193,029|72|
|Cached Empty.prototype|720,046,418|87|
|Empty.prototype|1,119,507|72|
|Empty class|816,052|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37588546.87984346,"samples":7},{"name":"Object.create({})","opsSec":1193029.0149864475,"samples":5},{"name":"Cached Empty.prototype","opsSec":720046418.0639176,"samples":6},{"name":"Empty.prototype","opsSec":1119506.6555635482,"samples":3},{"name":"Empty class","opsSec":816051.9014653382,"samples":4}]}-->
