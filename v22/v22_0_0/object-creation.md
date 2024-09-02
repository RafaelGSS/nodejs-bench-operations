## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,260,014|6130008|
|Object.create({})|1,904,039|952020|
|Cached Empty.prototype|12,740,827|6370414|
|Empty.prototype|2,411,627|1205814|
|Empty class|1,406,890|703446|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:27:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12260014.479739983,"samples":6130008},{"name":"Object.create({})","opsSec":1904039.424976096,"samples":952020},{"name":"Cached Empty.prototype","opsSec":12740827.388381446,"samples":6370414},{"name":"Empty.prototype","opsSec":2411627.966232845,"samples":1205814},{"name":"Empty class","opsSec":1406890.362381756,"samples":703446}]}-->
