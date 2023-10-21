## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,654,245|89|
|Adding property in the object creation - small object|4,852,301|92|
|Adding property after the function creation - small class|165,728|81|
|Adding property in the function creation - small class|167,075|81|
|Adding property after the class creation - small class|138,076|77|
|Adding property in the class creation - small class|135,024|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4654245.070731403,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":4852301.3007336585,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":165728.46417008445,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":167075.02272504027,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":138075.53087866114,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":135024.04728518976,"samples":3}]}-->
