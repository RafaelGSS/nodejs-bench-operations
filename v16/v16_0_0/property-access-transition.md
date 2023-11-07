## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,460,407|96|
|Adding property in the object creation - small object|2,486,947|98|
|Adding property after the function creation - small class|213,885|92|
|Adding property in the function creation - small class|215,526|92|
|Adding property after the class creation - small class|183,152|83|
|Adding property in the class creation - small class|183,846|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:31:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2460407.171707946,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2486946.563649534,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":213884.94720258637,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":215525.5833831604,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":183152.3717363924,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":183845.55586574588,"samples":3}]}-->
