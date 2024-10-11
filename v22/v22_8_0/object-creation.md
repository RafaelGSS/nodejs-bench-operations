## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,087,222|21092013|
|Object.create({})|2,023,310|1012096|
|Cached Empty.prototype|109,518,429|54759405|
|Empty.prototype|2,558,460|1292097|
|Empty class|1,576,741|788400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:31:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":42087222.190333344,"samples":21092013},{"name":"Object.create({})","opsSec":2023310.7955424606,"samples":1012096},{"name":"Cached Empty.prototype","opsSec":109518429.971048,"samples":54759405},{"name":"Empty.prototype","opsSec":2558460.756102884,"samples":1292097},{"name":"Empty class","opsSec":1576741.0551123954,"samples":788400}]}-->
