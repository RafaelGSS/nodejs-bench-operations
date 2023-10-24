## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,370,310|89|
|Object.create({})|1,549,814|79|
|Cached Empty.prototype|717,678,603|95|
|Empty.prototype|1,471,614|78|
|Empty class|1,012,331|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":49370309.580193125,"samples":6},{"name":"Object.create({})","opsSec":1549814.1346626924,"samples":3},{"name":"Cached Empty.prototype","opsSec":717678602.5279104,"samples":6},{"name":"Empty.prototype","opsSec":1471613.81611905,"samples":4},{"name":"Empty class","opsSec":1012331.1074476314,"samples":4}]}-->
