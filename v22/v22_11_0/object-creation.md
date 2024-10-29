## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,611,272|20807019|
|Object.create({})|2,107,667|1054124|
|Cached Empty.prototype|112,346,353|56177964|
|Empty.prototype|2,514,749|1264364|
|Empty class|1,558,830|779421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":41611272.18196061,"samples":20807019},{"name":"Object.create({})","opsSec":2107667.4598595216,"samples":1054124},{"name":"Cached Empty.prototype","opsSec":112346353.16970477,"samples":56177964},{"name":"Empty.prototype","opsSec":2514749.203249914,"samples":1264364},{"name":"Empty class","opsSec":1558830.3804783442,"samples":779421}]}-->
