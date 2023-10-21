## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,814,346|95|
|Adding property in the object creation - small object|5,842,648|98|
|Adding property after the function creation - small class|204,517|85|
|Adding property in the function creation - small class|208,429|84|
|Adding property after the class creation - small class|168,854|81|
|Adding property in the class creation - small class|166,508|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5814345.77960689,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5842648.344450931,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":204516.84287888077,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":208429.1350304664,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":168853.65087613455,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":166507.89904165512,"samples":3}]}-->
