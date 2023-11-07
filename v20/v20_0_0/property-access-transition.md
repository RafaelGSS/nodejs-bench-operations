## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,450,706|96|
|Adding property in the object creation - small object|8,525,301|97|
|Adding property after the function creation - small class|262,343|90|
|Adding property in the function creation - small class|266,472|91|
|Adding property after the class creation - small class|223,371|88|
|Adding property in the class creation - small class|223,712|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:41:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8450706.06085708,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":8525300.728615263,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":262342.99759080185,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":266472.03271699225,"samples":5},{"name":"Adding property after the class creation - small class","opsSec":223371.0257860267,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":223711.92759827056,"samples":3}]}-->
