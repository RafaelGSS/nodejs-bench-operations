## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,116,813|96|
|Adding property in the object creation - small object|2,014,100|90|
|Adding property after the function creation - small class|145,379|81|
|Adding property in the function creation - small class|142,001|82|
|Adding property after the class creation - small class|115,222|75|
|Adding property in the class creation - small class|112,675|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2116813.2555152,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":2014100.3948322255,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":145378.71647755394,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":142001.45709402653,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":115221.50611513878,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":112674.51848881238,"samples":3}]}-->
