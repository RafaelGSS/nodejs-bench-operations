## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,797,973|1899285|
|Adding property in the object creation - small object|3,717,756|1858879|
|Adding property after the function creation - small class|184,526|93526|
|Adding property in the function creation - small class|187,924|93967|
|Adding property after the class creation - small class|162,170|81250|
|Adding property in the class creation - small class|159,911|79956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3797973.7712895405,"samples":1899285},{"name":"Adding property in the object creation - small object","opsSec":3717756.4088002564,"samples":1858879},{"name":"Adding property after the function creation - small class","opsSec":184526.402263386,"samples":93526},{"name":"Adding property in the function creation - small class","opsSec":187924.96419187172,"samples":93967},{"name":"Adding property after the class creation - small class","opsSec":162170.43529534756,"samples":81250},{"name":"Adding property in the class creation - small class","opsSec":159911.02614185077,"samples":79956}]}-->
