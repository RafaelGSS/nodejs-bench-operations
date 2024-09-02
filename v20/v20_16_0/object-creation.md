## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|15,146,494|7573248|
|Object.create({})|1,914,841|957421|
|Cached Empty.prototype|18,878,366|9439184|
|Empty.prototype|1,945,125|972563|
|Empty class|1,222,394|611199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:24:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":15146494.57626964,"samples":7573248},{"name":"Object.create({})","opsSec":1914841.4063990258,"samples":957421},{"name":"Cached Empty.prototype","opsSec":18878366.980786648,"samples":9439184},{"name":"Empty.prototype","opsSec":1945125.1558223737,"samples":972563},{"name":"Empty class","opsSec":1222394.851108846,"samples":611199}]}-->
