## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,880,698|91|
|Object.create({})|1,279,069|84|
|Cached Empty.prototype|597,208,379|97|
|Empty.prototype|1,412,643|75|
|Empty class|844,024|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":47880698.27311134,"samples":6},{"name":"Object.create({})","opsSec":1279069.198215951,"samples":3},{"name":"Cached Empty.prototype","opsSec":597208378.507315,"samples":7},{"name":"Empty.prototype","opsSec":1412642.8404163637,"samples":3},{"name":"Empty class","opsSec":844023.8692182903,"samples":3}]}-->
