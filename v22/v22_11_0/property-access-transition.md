## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,354,246|4177259|
|Adding property in the object creation - small object|8,278,490|4139250|
|Adding property after the function creation - small class|263,474|134632|
|Adding property in the function creation - small class|251,336|126951|
|Adding property after the class creation - small class|277,262|140143|
|Adding property in the class creation - small class|275,659|137836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:48:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8354246.7041925285,"samples":4177259},{"name":"Adding property in the object creation - small object","opsSec":8278490.496292911,"samples":4139250},{"name":"Adding property after the function creation - small class","opsSec":263474.8762697268,"samples":134632},{"name":"Adding property in the function creation - small class","opsSec":251336.11861317832,"samples":126951},{"name":"Adding property after the class creation - small class","opsSec":277262.0075343378,"samples":140143},{"name":"Adding property in the class creation - small class","opsSec":275659.2739139605,"samples":137836}]}-->
