## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,647,702|92|
|Object.create({})|1,286,730|76|
|Cached Empty.prototype|603,177,011|94|
|Empty.prototype|1,186,013|80|
|Empty class|813,776|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:42:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":41647701.62652146,"samples":6},{"name":"Object.create({})","opsSec":1286730.131003567,"samples":5},{"name":"Cached Empty.prototype","opsSec":603177010.9000883,"samples":6},{"name":"Empty.prototype","opsSec":1186013.3943237353,"samples":3},{"name":"Empty class","opsSec":813775.5075094836,"samples":3}]}-->
