## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,713,089|97|
|Adding property in the object creation - small object|3,717,585|97|
|Adding property after the function creation - small class|232,414|91|
|Adding property in the function creation - small class|232,291|91|
|Adding property after the class creation - small class|195,516|89|
|Adding property in the class creation - small class|195,019|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:37:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3713088.918297227,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3717584.5673434203,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":232414.21713676135,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":232291.2551283422,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":195516.11338704758,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":195019.00635187747,"samples":3}]}-->
