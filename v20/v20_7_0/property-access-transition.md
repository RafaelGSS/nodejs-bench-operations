## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,822,467|95|
|Adding property in the object creation - small object|5,901,735|97|
|Adding property after the function creation - small class|201,881|81|
|Adding property in the function creation - small class|204,404|85|
|Adding property after the class creation - small class|165,311|78|
|Adding property in the class creation - small class|165,939|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5822466.851694605,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":5901734.70840849,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":201880.76834642026,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":204403.54987190542,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":165311.18189505636,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":165939.36172895908,"samples":3}]}-->
