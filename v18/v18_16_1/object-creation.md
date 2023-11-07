## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,961,643|94|
|Object.create({})|1,482,988|89|
|Cached Empty.prototype|845,868,116|89|
|Empty.prototype|1,637,608|88|
|Empty class|955,112|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:47:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77961642.6831134,"samples":5},{"name":"Object.create({})","opsSec":1482988.0577365572,"samples":3},{"name":"Cached Empty.prototype","opsSec":845868116.2286245,"samples":9},{"name":"Empty.prototype","opsSec":1637608.3428298943,"samples":3},{"name":"Empty class","opsSec":955112.3954195508,"samples":3}]}-->
