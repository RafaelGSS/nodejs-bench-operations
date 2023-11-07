## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,537,988|96|
|Object.create({})|2,559,018|79|
|Cached Empty.prototype|853,267,614|94|
|Empty.prototype|2,382,867|77|
|Empty class|1,524,223|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:50:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78537988.08409365,"samples":6},{"name":"Object.create({})","opsSec":2559018.0392168895,"samples":3},{"name":"Cached Empty.prototype","opsSec":853267613.7520432,"samples":7},{"name":"Empty.prototype","opsSec":2382867.04106815,"samples":3},{"name":"Empty class","opsSec":1524222.7184723907,"samples":4}]}-->
