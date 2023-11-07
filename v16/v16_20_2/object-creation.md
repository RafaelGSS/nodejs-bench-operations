## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,163,772|94|
|Object.create({})|2,063,168|91|
|Cached Empty.prototype|849,255,661|101|
|Empty.prototype|2,114,444|86|
|Empty class|1,341,769|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:46:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":68163771.90852368,"samples":6},{"name":"Object.create({})","opsSec":2063168.22896695,"samples":3},{"name":"Cached Empty.prototype","opsSec":849255660.5634505,"samples":7},{"name":"Empty.prototype","opsSec":2114444.313945456,"samples":3},{"name":"Empty class","opsSec":1341769.313719762,"samples":3}]}-->
