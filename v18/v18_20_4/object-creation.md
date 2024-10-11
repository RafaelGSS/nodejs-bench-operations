## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,856,622|22932835|
|Object.create({})|1,229,570|624222|
|Cached Empty.prototype|107,491,739|53746631|
|Empty.prototype|1,424,650|713765|
|Empty class|874,420|447851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:12:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":45856622.85516366,"samples":22932835},{"name":"Object.create({})","opsSec":1229570.2249227392,"samples":624222},{"name":"Cached Empty.prototype","opsSec":107491739.05704103,"samples":53746631},{"name":"Empty.prototype","opsSec":1424650.868922262,"samples":713765},{"name":"Empty class","opsSec":874420.5144135769,"samples":447851}]}-->
