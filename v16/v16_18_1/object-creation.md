## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,383,786|94|
|Object.create({})|1,213,246|77|
|Cached Empty.prototype|713,715,824|96|
|Empty.prototype|1,243,383|71|
|Empty class|847,339|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":40383785.76435981,"samples":8},{"name":"Object.create({})","opsSec":1213245.9379225434,"samples":4},{"name":"Cached Empty.prototype","opsSec":713715823.887349,"samples":8},{"name":"Empty.prototype","opsSec":1243382.9268439396,"samples":3},{"name":"Empty class","opsSec":847338.8530157141,"samples":3}]}-->
