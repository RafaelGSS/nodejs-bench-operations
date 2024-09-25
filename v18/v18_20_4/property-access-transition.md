## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,816,114|1408058|
|Adding property in the object creation - small object|2,809,627|1404814|
|Adding property after the function creation - small class|185,073|93268|
|Adding property in the function creation - small class|191,621|95811|
|Adding property after the class creation - small class|152,264|76133|
|Adding property in the class creation - small class|157,486|78744|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:49:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2816114.8850434353,"samples":1408058},{"name":"Adding property in the object creation - small object","opsSec":2809627.5352062215,"samples":1404814},{"name":"Adding property after the function creation - small class","opsSec":185073.80762303344,"samples":93268},{"name":"Adding property in the function creation - small class","opsSec":191621.33319087353,"samples":95811},{"name":"Adding property after the class creation - small class","opsSec":152264.00695837624,"samples":76133},{"name":"Adding property in the class creation - small class","opsSec":157486.71046450178,"samples":78744}]}-->
