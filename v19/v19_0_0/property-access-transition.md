## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,851,146|98|
|Adding property in the object creation - small object|1,858,846|97|
|Adding property after the function creation - small class|164,411|87|
|Adding property in the function creation - small class|165,197|91|
|Adding property after the class creation - small class|138,816|87|
|Adding property in the class creation - small class|138,297|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1851146.0936100455,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1858846.3571770047,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":164410.60817380532,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":165197.0142703309,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":138816.20262666972,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":138296.85994955705,"samples":3}]}-->
