## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,779,124|100|
|Adding property in the object creation - small object|3,819,781|95|
|Adding property after the function creation - small class|194,418|89|
|Adding property in the function creation - small class|192,424|87|
|Adding property after the class creation - small class|164,385|88|
|Adding property in the class creation - small class|162,198|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:39:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3779124.087467065,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3819781.2779096975,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":194417.76813670772,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":192423.9851295844,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":164384.95890522204,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":162197.79885523597,"samples":5}]}-->
