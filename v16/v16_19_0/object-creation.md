## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,360,653|93|
|Object.create({})|1,415,631|82|
|Cached Empty.prototype|594,127,935|94|
|Empty.prototype|1,486,594|77|
|Empty class|882,319|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":49360653.03356063,"samples":6},{"name":"Object.create({})","opsSec":1415631.4105554924,"samples":3},{"name":"Cached Empty.prototype","opsSec":594127934.9569684,"samples":6},{"name":"Empty.prototype","opsSec":1486593.5273643197,"samples":3},{"name":"Empty class","opsSec":882319.4762698959,"samples":5}]}-->
