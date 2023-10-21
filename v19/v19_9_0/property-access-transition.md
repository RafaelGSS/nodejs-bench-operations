## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,661,616|95|
|Adding property in the object creation - small object|2,690,358|93|
|Adding property after the function creation - small class|179,864|82|
|Adding property in the function creation - small class|183,494|83|
|Adding property after the class creation - small class|150,664|76|
|Adding property in the class creation - small class|152,739|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2661616.4643213134,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2690357.757232635,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":179864.39363711255,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":183494.36919092134,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":150664.32086128223,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":152738.90312325011,"samples":3}]}-->
