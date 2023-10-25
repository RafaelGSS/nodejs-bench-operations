## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,666,506|88|
|Adding property in the object creation - small object|2,708,475|90|
|Adding property after the function creation - small class|147,579|77|
|Adding property in the function creation - small class|154,546|79|
|Adding property after the class creation - small class|142,844|77|
|Adding property in the class creation - small class|146,146|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2666506.3675729604,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2708474.643725533,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":147578.9558273371,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":154545.9286653429,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":142843.6819859523,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":146146.37590441288,"samples":4}]}-->
