## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,080,344|22044325|
|Object.create({})|2,018,533|1009268|
|Cached Empty.prototype|76,506,939|38293870|
|Empty.prototype|2,494,951|1247549|
|Empty class|1,566,807|783405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:24:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":44080344.822232045,"samples":22044325},{"name":"Object.create({})","opsSec":2018533.9087988704,"samples":1009268},{"name":"Cached Empty.prototype","opsSec":76506939.49106468,"samples":38293870},{"name":"Empty.prototype","opsSec":2494951.107258609,"samples":1247549},{"name":"Empty class","opsSec":1566807.536978552,"samples":783405}]}-->
