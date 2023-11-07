## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,619,032|93|
|Object.create({})|2,625,940|88|
|Cached Empty.prototype|842,926,167|98|
|Empty.prototype|2,552,532|91|
|Empty class|1,546,186|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:53:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77619032.39928403,"samples":8},{"name":"Object.create({})","opsSec":2625939.5081269117,"samples":3},{"name":"Cached Empty.prototype","opsSec":842926167.4833289,"samples":6},{"name":"Empty.prototype","opsSec":2552532.0338958674,"samples":4},{"name":"Empty class","opsSec":1546186.357655236,"samples":3}]}-->
