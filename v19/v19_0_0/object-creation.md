## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,592,331|86|
|Object.create({})|1,575,050|79|
|Cached Empty.prototype|596,744,787|95|
|Empty.prototype|1,515,254|77|
|Empty class|1,007,065|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":42592330.75608526,"samples":6},{"name":"Object.create({})","opsSec":1575050.3840194123,"samples":4},{"name":"Cached Empty.prototype","opsSec":596744786.7398041,"samples":6},{"name":"Empty.prototype","opsSec":1515253.600380415,"samples":3},{"name":"Empty class","opsSec":1007065.106221726,"samples":3}]}-->
