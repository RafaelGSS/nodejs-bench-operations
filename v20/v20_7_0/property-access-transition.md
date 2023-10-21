## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,618,559|89|
|Adding property in the object creation - small object|2,537,297|88|
|Adding property after the function creation - small class|138,178|76|
|Adding property in the function creation - small class|138,644|78|
|Adding property after the class creation - small class|118,275|76|
|Adding property in the class creation - small class|119,894|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2618558.831074692,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":2537296.5374869998,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":138177.80003775196,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":138643.87296239974,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":118274.80436021935,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":119894.35085604008,"samples":3}]}-->
