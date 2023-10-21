## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,716,112|97|
|Adding property in the object creation - small object|1,737,235|97|
|Adding property after the function creation - small class|152,948|88|
|Adding property in the function creation - small class|154,166|87|
|Adding property after the class creation - small class|130,430|82|
|Adding property in the class creation - small class|130,631|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1716112.186523031,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1737235.1879072716,"samples":9},{"name":"Adding property after the function creation - small class","opsSec":152948.38740036136,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":154165.7163167123,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":130430.28615016266,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":130630.71912578121,"samples":3}]}-->
