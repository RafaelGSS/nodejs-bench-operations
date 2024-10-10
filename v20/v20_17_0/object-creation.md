## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,935,355|21467707|
|Object.create({})|1,879,954|944484|
|Cached Empty.prototype|112,124,296|56666211|
|Empty.prototype|2,239,255|1119630|
|Empty class|1,395,274|708977|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:30:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":42935355.264434,"samples":21467707},{"name":"Object.create({})","opsSec":1879954.4119355308,"samples":944484},{"name":"Cached Empty.prototype","opsSec":112124296.38560921,"samples":56666211},{"name":"Empty.prototype","opsSec":2239255.261735866,"samples":1119630},{"name":"Empty class","opsSec":1395274.9388325275,"samples":708977}]}-->
