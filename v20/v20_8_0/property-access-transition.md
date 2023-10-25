## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,901,376|94|
|Adding property in the object creation - small object|5,910,162|92|
|Adding property after the function creation - small class|187,055|88|
|Adding property in the function creation - small class|188,608|87|
|Adding property after the class creation - small class|157,386|84|
|Adding property in the class creation - small class|158,668|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5901375.892412326,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5910162.154834447,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":187054.6634845065,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":188608.0345867609,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":157386.35829446194,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":158668.19191794744,"samples":3}]}-->
