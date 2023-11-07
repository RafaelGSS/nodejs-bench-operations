## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,694,428|96|
|Adding property in the object creation - small object|3,705,683|97|
|Adding property after the function creation - small class|192,945|90|
|Adding property in the function creation - small class|194,511|89|
|Adding property after the class creation - small class|164,137|86|
|Adding property in the class creation - small class|163,089|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:40:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3694427.6873910553,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":3705683.364259876,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":192944.59253284844,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":194511.32724884315,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":164137.0000504043,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":163088.88107408574,"samples":4}]}-->
