## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,245,744|93|
|Object.create({})|1,376,990|80|
|Cached Empty.prototype|591,936,465|90|
|Empty.prototype|1,491,007|76|
|Empty class|885,175|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":49245743.5281364,"samples":7},{"name":"Object.create({})","opsSec":1376990.4945258424,"samples":3},{"name":"Cached Empty.prototype","opsSec":591936464.6147636,"samples":10},{"name":"Empty.prototype","opsSec":1491006.5134454863,"samples":3},{"name":"Empty class","opsSec":885174.9322862757,"samples":3}]}-->
