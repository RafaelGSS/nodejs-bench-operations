## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,836,506|97|
|Adding property in the object creation - small object|4,913,717|95|
|Adding property after the function creation - small class|159,671|78|
|Adding property in the function creation - small class|166,581|83|
|Adding property after the class creation - small class|127,257|73|
|Adding property in the class creation - small class|136,569|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4836505.645937885,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":4913717.441158497,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":159670.55368539388,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":166581.3665469828,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":127257.24249150496,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":136569.05701738512,"samples":3}]}-->
