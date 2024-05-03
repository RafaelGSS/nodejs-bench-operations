## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,609,677|95|
|Adding property in the object creation - small object|5,677,808|99|
|Adding property after the function creation - small class|289,646|90|
|Adding property in the function creation - small class|289,663|89|
|Adding property after the class creation - small class|293,919|87|
|Adding property in the class creation - small class|294,363|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:32:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5609676.933035887,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5677808.47989975,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":289646.281906837,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":289663.0067423165,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":293918.93781287735,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":294362.6528627819,"samples":4}]}-->
