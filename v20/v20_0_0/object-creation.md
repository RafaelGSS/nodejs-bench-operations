## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,887,071|94|
|Object.create({})|1,411,224|72|
|Cached Empty.prototype|713,959,002|99|
|Empty.prototype|1,379,496|70|
|Empty class|955,269|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":48887071.23099205,"samples":8},{"name":"Object.create({})","opsSec":1411223.9673945024,"samples":3},{"name":"Cached Empty.prototype","opsSec":713959001.762539,"samples":6},{"name":"Empty.prototype","opsSec":1379496.2662483137,"samples":3},{"name":"Empty class","opsSec":955268.8915630617,"samples":3}]}-->
