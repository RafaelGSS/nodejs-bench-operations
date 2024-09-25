## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,717,136|2358569|
|Adding property in the object creation - small object|4,652,019|2326010|
|Adding property after the function creation - small class|244,519|123078|
|Adding property in the function creation - small class|238,503|119252|
|Adding property after the class creation - small class|201,237|100619|
|Adding property in the class creation - small class|202,135|101068|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:50:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4717136.1138692405,"samples":2358569},{"name":"Adding property in the object creation - small object","opsSec":4652019.865743525,"samples":2326010},{"name":"Adding property after the function creation - small class","opsSec":244519.64636362516,"samples":123078},{"name":"Adding property in the function creation - small class","opsSec":238503.1070677765,"samples":119252},{"name":"Adding property after the class creation - small class","opsSec":201237.45417502234,"samples":100619},{"name":"Adding property in the class creation - small class","opsSec":202135.7921695025,"samples":101068}]}-->
