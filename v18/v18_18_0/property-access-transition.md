## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,491,724|98|
|Adding property in the object creation - small object|3,484,163|93|
|Adding property after the function creation - small class|203,583|87|
|Adding property in the function creation - small class|205,825|89|
|Adding property after the class creation - small class|170,935|86|
|Adding property in the class creation - small class|170,272|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3491723.8921312736,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3484163.0398826897,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":203583.3439995824,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":205825.34568411455,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":170934.53748576992,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":170272.17405325625,"samples":4}]}-->
