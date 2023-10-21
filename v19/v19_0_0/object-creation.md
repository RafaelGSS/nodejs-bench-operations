## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,304,257|89|
|Object.create({})|1,412,577|78|
|Cached Empty.prototype|714,904,212|96|
|Empty.prototype|1,344,624|75|
|Empty class|1,007,279|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":42304256.59196606,"samples":6},{"name":"Object.create({})","opsSec":1412576.8012479001,"samples":3},{"name":"Cached Empty.prototype","opsSec":714904211.5797565,"samples":7},{"name":"Empty.prototype","opsSec":1344623.9293084613,"samples":3},{"name":"Empty class","opsSec":1007278.7861237054,"samples":4}]}-->
