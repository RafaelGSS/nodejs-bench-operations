## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,105,361|94|
|Object.create({})|1,253,863|79|
|Cached Empty.prototype|713,314,114|97|
|Empty.prototype|1,284,224|74|
|Empty class|888,483|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":50105360.72848693,"samples":5},{"name":"Object.create({})","opsSec":1253862.7897505658,"samples":3},{"name":"Cached Empty.prototype","opsSec":713314114.3808991,"samples":7},{"name":"Empty.prototype","opsSec":1284224.3568498394,"samples":3},{"name":"Empty class","opsSec":888482.6453791185,"samples":3}]}-->
