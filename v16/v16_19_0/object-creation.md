## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,219,162|93|
|Object.create({})|2,135,633|84|
|Cached Empty.prototype|850,133,748|101|
|Empty.prototype|2,179,669|86|
|Empty class|1,275,144|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:45:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":67219161.98497103,"samples":5},{"name":"Object.create({})","opsSec":2135632.6187426927,"samples":5},{"name":"Cached Empty.prototype","opsSec":850133747.5820917,"samples":7},{"name":"Empty.prototype","opsSec":2179668.682789664,"samples":3},{"name":"Empty class","opsSec":1275143.5470870815,"samples":3}]}-->
