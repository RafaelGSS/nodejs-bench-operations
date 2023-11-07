## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,348,788|90|
|Object.create({})|2,518,993|85|
|Cached Empty.prototype|852,004,103|100|
|Empty.prototype|2,370,380|91|
|Empty class|1,523,352|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:52:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78348788.16844244,"samples":6},{"name":"Object.create({})","opsSec":2518993.4179033763,"samples":3},{"name":"Cached Empty.prototype","opsSec":852004102.6936612,"samples":7},{"name":"Empty.prototype","opsSec":2370379.874148053,"samples":3},{"name":"Empty class","opsSec":1523352.1908419598,"samples":3}]}-->
