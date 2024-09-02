## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,072,193|2536097|
|Adding property in the object creation - small object|5,020,913|2510457|
|Adding property after the function creation - small class|252,731|126366|
|Adding property in the function creation - small class|251,913|125957|
|Adding property after the class creation - small class|237,221|118611|
|Adding property in the class creation - small class|230,346|116333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:11:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5072193.786964827,"samples":2536097},{"name":"Adding property in the object creation - small object","opsSec":5020913.708783417,"samples":2510457},{"name":"Adding property after the function creation - small class","opsSec":252731.12757229267,"samples":126366},{"name":"Adding property in the function creation - small class","opsSec":251913.4301718883,"samples":125957},{"name":"Adding property after the class creation - small class","opsSec":237221.5103743762,"samples":118611},{"name":"Adding property in the class creation - small class","opsSec":230346.41893248807,"samples":116333}]}-->
