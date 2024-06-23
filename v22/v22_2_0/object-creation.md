## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,982,560|6491281|
|Object.create({})|1,758,744|879373|
|Cached Empty.prototype|15,511,338|7755670|
|Empty.prototype|2,550,365|1275183|
|Empty class|1,548,711|774356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:59:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12982560.260338496,"samples":6491281},{"name":"Object.create({})","opsSec":1758744.8673700495,"samples":879373},{"name":"Cached Empty.prototype","opsSec":15511338.976262651,"samples":7755670},{"name":"Empty.prototype","opsSec":2550365.290996613,"samples":1275183},{"name":"Empty class","opsSec":1548711.414586352,"samples":774356}]}-->
