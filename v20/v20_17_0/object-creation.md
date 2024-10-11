## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,079,426|21041559|
|Object.create({})|1,857,698|934974|
|Cached Empty.prototype|75,856,869|37930164|
|Empty.prototype|2,080,244|1040291|
|Empty class|1,381,382|694240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:12:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":42079426.28777292,"samples":21041559},{"name":"Object.create({})","opsSec":1857698.938807358,"samples":934974},{"name":"Cached Empty.prototype","opsSec":75856869.53360422,"samples":37930164},{"name":"Empty.prototype","opsSec":2080244.7257621225,"samples":1040291},{"name":"Empty class","opsSec":1381382.2590340378,"samples":694240}]}-->
