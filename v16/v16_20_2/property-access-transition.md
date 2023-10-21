## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,947,360|98|
|Adding property in the object creation - small object|1,960,714|98|
|Adding property after the function creation - small class|174,288|86|
|Adding property in the function creation - small class|175,364|87|
|Adding property after the class creation - small class|142,709|81|
|Adding property in the class creation - small class|142,841|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1947360.4320349675,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":1960713.6044219718,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":174287.77974391184,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":175363.6981620733,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":142709.0738033342,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":142840.75341793516,"samples":3}]}-->
