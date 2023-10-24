## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,968,263|91|
|Object.create({})|1,303,457|80|
|Cached Empty.prototype|715,081,482|95|
|Empty.prototype|1,331,675|74|
|Empty class|910,582|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":41968262.91581797,"samples":7},{"name":"Object.create({})","opsSec":1303457.319883779,"samples":3},{"name":"Cached Empty.prototype","opsSec":715081481.6819216,"samples":11},{"name":"Empty.prototype","opsSec":1331674.7465556823,"samples":3},{"name":"Empty class","opsSec":910581.7180634368,"samples":3}]}-->
