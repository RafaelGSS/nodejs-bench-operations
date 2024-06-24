## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,971,905|1485953|
|Adding property in the object creation - small object|2,928,764|1464383|
|Adding property after the function creation - small class|208,891|104446|
|Adding property in the function creation - small class|221,330|110666|
|Adding property after the class creation - small class|179,889|89945|
|Adding property in the class creation - small class|176,627|88314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:25:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2971905.9103563945,"samples":1485953},{"name":"Adding property in the object creation - small object","opsSec":2928764.37719442,"samples":1464383},{"name":"Adding property after the function creation - small class","opsSec":208891.29270066167,"samples":104446},{"name":"Adding property in the function creation - small class","opsSec":221330.65085042504,"samples":110666},{"name":"Adding property after the class creation - small class","opsSec":179889.3110248076,"samples":89945},{"name":"Adding property in the class creation - small class","opsSec":176627.93042772298,"samples":88314}]}-->
