## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,961,353|5980790|
|Object.create({})|1,820,410|910206|
|Cached Empty.prototype|13,866,449|6933225|
|Empty.prototype|2,048,205|1024103|
|Empty class|1,214,997|607499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11961353.451994276,"samples":5980790},{"name":"Object.create({})","opsSec":1820410.9041100263,"samples":910206},{"name":"Cached Empty.prototype","opsSec":13866449.944612524,"samples":6933225},{"name":"Empty.prototype","opsSec":2048205.73784132,"samples":1024103},{"name":"Empty class","opsSec":1214997.3293242883,"samples":607499}]}-->
