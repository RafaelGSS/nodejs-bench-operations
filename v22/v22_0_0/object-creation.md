## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,263,840|22132519|
|Object.create({})|2,063,186|1031649|
|Cached Empty.prototype|81,880,015|40940132|
|Empty.prototype|2,587,790|1299421|
|Empty class|1,599,785|801096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:19:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":44263840.48605949,"samples":22132519},{"name":"Object.create({})","opsSec":2063186.315598364,"samples":1031649},{"name":"Cached Empty.prototype","opsSec":81880015.57603276,"samples":40940132},{"name":"Empty.prototype","opsSec":2587790.540313887,"samples":1299421},{"name":"Empty class","opsSec":1599785.0498024598,"samples":801096}]}-->
