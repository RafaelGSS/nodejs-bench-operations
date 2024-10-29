## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,022,203|4011139|
|Adding property in the object creation - small object|7,855,464|3929330|
|Adding property after the function creation - small class|266,112|133148|
|Adding property in the function creation - small class|287,294|144415|
|Adding property after the class creation - small class|276,255|139232|
|Adding property in the class creation - small class|272,576|137678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8022203.457685471,"samples":4011139},{"name":"Adding property in the object creation - small object","opsSec":7855464.585537754,"samples":3929330},{"name":"Adding property after the function creation - small class","opsSec":266112.99515768205,"samples":133148},{"name":"Adding property in the function creation - small class","opsSec":287294.51367583853,"samples":144415},{"name":"Adding property after the class creation - small class","opsSec":276255.97385041334,"samples":139232},{"name":"Adding property in the class creation - small class","opsSec":272576.75776881917,"samples":137678}]}-->
