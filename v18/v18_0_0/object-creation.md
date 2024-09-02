## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,070,625|7035313|
|Object.create({})|1,749,851|874926|
|Cached Empty.prototype|16,518,517|8259259|
|Empty.prototype|1,822,965|911483|
|Empty class|1,154,200|582111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:22:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":14070625.630485194,"samples":7035313},{"name":"Object.create({})","opsSec":1749851.666030424,"samples":874926},{"name":"Cached Empty.prototype","opsSec":16518517.055787453,"samples":8259259},{"name":"Empty.prototype","opsSec":1822965.6078798708,"samples":911483},{"name":"Empty class","opsSec":1154200.736791293,"samples":582111}]}-->
