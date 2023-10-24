## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,972,476|97|
|Adding property in the object creation - small object|1,975,821|93|
|Adding property after the function creation - small class|144,460|85|
|Adding property in the function creation - small class|147,816|86|
|Adding property after the class creation - small class|118,742|79|
|Adding property in the class creation - small class|117,516|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1972475.7891704743,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1975821.2904172842,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":144459.80386044405,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":147815.92381031628,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":118742.20199153233,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":117516.429047764,"samples":4}]}-->
