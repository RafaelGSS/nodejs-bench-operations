## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,701,950|92|
|Object.create({})|2,547,311|87|
|Cached Empty.prototype|853,861,124|92|
|Empty.prototype|2,428,241|82|
|Empty class|1,497,264|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:52:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78701950.34024596,"samples":5},{"name":"Object.create({})","opsSec":2547310.8887914144,"samples":3},{"name":"Cached Empty.prototype","opsSec":853861124.2187363,"samples":8},{"name":"Empty.prototype","opsSec":2428241.283988277,"samples":3},{"name":"Empty class","opsSec":1497264.0040844532,"samples":3}]}-->
