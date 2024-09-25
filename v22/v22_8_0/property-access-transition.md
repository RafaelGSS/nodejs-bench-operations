## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,021,879|2510940|
|Adding property in the object creation - small object|5,065,451|2532726|
|Adding property after the function creation - small class|246,939|123470|
|Adding property in the function creation - small class|274,739|137370|
|Adding property after the class creation - small class|267,408|133705|
|Adding property in the class creation - small class|250,266|125134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5021879.387321061,"samples":2510940},{"name":"Adding property in the object creation - small object","opsSec":5065451.604898511,"samples":2532726},{"name":"Adding property after the function creation - small class","opsSec":246939.2631333846,"samples":123470},{"name":"Adding property in the function creation - small class","opsSec":274739.13512090786,"samples":137370},{"name":"Adding property after the class creation - small class","opsSec":267408.47149335995,"samples":133705},{"name":"Adding property in the class creation - small class","opsSec":250266.3712664698,"samples":125134}]}-->
