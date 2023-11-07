## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,620,905|95|
|Object.create({})|2,634,628|89|
|Cached Empty.prototype|848,746,331|94|
|Empty.prototype|2,568,705|91|
|Empty class|1,556,280|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77620904.57525036,"samples":6},{"name":"Object.create({})","opsSec":2634628.0581515008,"samples":3},{"name":"Cached Empty.prototype","opsSec":848746330.9895827,"samples":6},{"name":"Empty.prototype","opsSec":2568704.9891105397,"samples":3},{"name":"Empty class","opsSec":1556280.1801171068,"samples":3}]}-->
