## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,967,062|2483532|
|Adding property in the object creation - small object|4,951,339|2475670|
|Adding property after the function creation - small class|254,537|127269|
|Adding property in the function creation - small class|263,127|131564|
|Adding property after the class creation - small class|267,357|133679|
|Adding property in the class creation - small class|263,302|131652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:14:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4967062.22178123,"samples":2483532},{"name":"Adding property in the object creation - small object","opsSec":4951339.801938487,"samples":2475670},{"name":"Adding property after the function creation - small class","opsSec":254537.39318289462,"samples":127269},{"name":"Adding property in the function creation - small class","opsSec":263127.89053895674,"samples":131564},{"name":"Adding property after the class creation - small class","opsSec":267357.4337371809,"samples":133679},{"name":"Adding property in the class creation - small class","opsSec":263302.52813903993,"samples":131652}]}-->
