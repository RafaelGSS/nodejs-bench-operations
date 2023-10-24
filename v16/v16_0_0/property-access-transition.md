## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,556,901|91|
|Adding property in the object creation - small object|1,598,637|96|
|Adding property after the function creation - small class|133,262|79|
|Adding property in the function creation - small class|137,049|85|
|Adding property after the class creation - small class|113,195|81|
|Adding property in the class creation - small class|112,035|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1556901.2434001693,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1598636.874260115,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":133261.6161523999,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":137049.03049619123,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":113195.45083197727,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":112035.14473345227,"samples":3}]}-->
