## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,766,148|3884706|
|Adding property in the object creation - small object|7,378,661|3689435|
|Adding property after the function creation - small class|227,264|113645|
|Adding property in the function creation - small class|243,525|122812|
|Adding property after the class creation - small class|235,345|118969|
|Adding property in the class creation - small class|233,113|116563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:26:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7766148.52459929,"samples":3884706},{"name":"Adding property in the object creation - small object","opsSec":7378661.582324945,"samples":3689435},{"name":"Adding property after the function creation - small class","opsSec":227264.24823350416,"samples":113645},{"name":"Adding property in the function creation - small class","opsSec":243525.84560508977,"samples":122812},{"name":"Adding property after the class creation - small class","opsSec":235345.82948887735,"samples":118969},{"name":"Adding property in the class creation - small class","opsSec":233113.30418322756,"samples":116563}]}-->
