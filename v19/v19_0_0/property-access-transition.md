## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,858,505|97|
|Adding property in the object creation - small object|1,846,806|95|
|Adding property after the function creation - small class|163,310|90|
|Adding property in the function creation - small class|164,245|90|
|Adding property after the class creation - small class|139,366|84|
|Adding property in the class creation - small class|139,992|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1858505.24899396,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1846806.436849161,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":163309.75381438623,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":164244.63967829358,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":139366.37444458067,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":139991.5840407064,"samples":4}]}-->
