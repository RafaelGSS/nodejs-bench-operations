## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,350,432|87|
|Object.create({})|1,613,527|80|
|Cached Empty.prototype|750,452,337|92|
|Empty.prototype|1,528,925|78|
|Empty class|1,058,619|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":50350431.67739145,"samples":8},{"name":"Object.create({})","opsSec":1613526.7041785999,"samples":3},{"name":"Cached Empty.prototype","opsSec":750452337.0765913,"samples":6},{"name":"Empty.prototype","opsSec":1528925.0358748713,"samples":3},{"name":"Empty class","opsSec":1058618.972849253,"samples":4}]}-->
