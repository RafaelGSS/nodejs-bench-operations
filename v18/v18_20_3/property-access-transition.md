## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,693,748|1346875|
|Adding property in the object creation - small object|2,690,561|1345281|
|Adding property after the function creation - small class|191,253|95627|
|Adding property in the function creation - small class|194,373|97187|
|Adding property after the class creation - small class|166,851|83426|
|Adding property in the class creation - small class|157,939|78970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:09:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2693748.103627035,"samples":1346875},{"name":"Adding property in the object creation - small object","opsSec":2690561.4631415117,"samples":1345281},{"name":"Adding property after the function creation - small class","opsSec":191253.21542533368,"samples":95627},{"name":"Adding property in the function creation - small class","opsSec":194373.23632631337,"samples":97187},{"name":"Adding property after the class creation - small class","opsSec":166851.9136363257,"samples":83426},{"name":"Adding property in the class creation - small class","opsSec":157939.05428242462,"samples":78970}]}-->
