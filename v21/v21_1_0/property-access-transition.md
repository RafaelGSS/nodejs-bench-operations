## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,058,804|87|
|Adding property in the object creation - small object|5,191,050|85|
|Adding property after the function creation - small class|178,483|78|
|Adding property in the function creation - small class|177,429|79|
|Adding property after the class creation - small class|164,051|75|
|Adding property in the class creation - small class|167,565|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:33:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5058803.725914061,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5191049.554436277,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":178482.71175664628,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":177428.94821629493,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":164050.67717165413,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":167565.08291538648,"samples":4}]}-->
