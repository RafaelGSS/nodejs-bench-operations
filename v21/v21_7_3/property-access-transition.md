## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,858,415|2429208|
|Adding property in the object creation - small object|4,831,872|2415937|
|Adding property after the function creation - small class|238,565|119283|
|Adding property in the function creation - small class|247,043|123523|
|Adding property after the class creation - small class|231,465|115733|
|Adding property in the class creation - small class|224,886|112444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:53:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4858415.416993222,"samples":2429208},{"name":"Adding property in the object creation - small object","opsSec":4831872.608419918,"samples":2415937},{"name":"Adding property after the function creation - small class","opsSec":238565.11396921915,"samples":119283},{"name":"Adding property in the function creation - small class","opsSec":247043.93915949162,"samples":123523},{"name":"Adding property after the class creation - small class","opsSec":231465.388005381,"samples":115733},{"name":"Adding property in the class creation - small class","opsSec":224886.26522729945,"samples":112444}]}-->
