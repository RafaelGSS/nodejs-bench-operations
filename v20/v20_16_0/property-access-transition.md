## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,988,466|2494234|
|Adding property in the object creation - small object|4,939,623|2469812|
|Adding property after the function creation - small class|250,206|125104|
|Adding property in the function creation - small class|237,720|118861|
|Adding property after the class creation - small class|243,456|121729|
|Adding property in the class creation - small class|236,082|120308|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:50:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4988466.862632945,"samples":2494234},{"name":"Adding property in the object creation - small object","opsSec":4939623.1602569325,"samples":2469812},{"name":"Adding property after the function creation - small class","opsSec":250206.60334672788,"samples":125104},{"name":"Adding property in the function creation - small class","opsSec":237720.80283803202,"samples":118861},{"name":"Adding property after the class creation - small class","opsSec":243456.62349623026,"samples":121729},{"name":"Adding property in the class creation - small class","opsSec":236082.68179546902,"samples":120308}]}-->
