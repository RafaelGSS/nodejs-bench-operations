## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,333,764|1666883|
|Adding property in the object creation - small object|3,341,353|1670677|
|Adding property after the function creation - small class|267,544|133773|
|Adding property in the function creation - small class|254,605|127303|
|Adding property after the class creation - small class|247,201|123601|
|Adding property in the class creation - small class|255,123|127562|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:27:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3333764.5267054816,"samples":1666883},{"name":"Adding property in the object creation - small object","opsSec":3341353.6598157105,"samples":1670677},{"name":"Adding property after the function creation - small class","opsSec":267544.5691983736,"samples":133773},{"name":"Adding property in the function creation - small class","opsSec":254605.72203079707,"samples":127303},{"name":"Adding property after the class creation - small class","opsSec":247201.2049313296,"samples":123601},{"name":"Adding property in the class creation - small class","opsSec":255123.65810342028,"samples":127562}]}-->
