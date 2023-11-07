## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,574,565|93|
|Object.create({})|1,491,172|88|
|Cached Empty.prototype|848,067,563|98|
|Empty.prototype|1,636,992|86|
|Empty class|982,839|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:49:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77574564.96777095,"samples":7},{"name":"Object.create({})","opsSec":1491172.448529488,"samples":3},{"name":"Cached Empty.prototype","opsSec":848067562.8687308,"samples":6},{"name":"Empty.prototype","opsSec":1636991.8172919229,"samples":3},{"name":"Empty class","opsSec":982838.5206066543,"samples":3}]}-->
