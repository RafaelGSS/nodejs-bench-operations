## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,010,512|2005257|
|Adding property in the object creation - small object|4,013,824|2006913|
|Adding property after the function creation - small class|295,172|147587|
|Adding property in the function creation - small class|315,489|157745|
|Adding property after the class creation - small class|310,888|155445|
|Adding property in the class creation - small class|305,957|152979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:44:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4010512.9171610093,"samples":2005257},{"name":"Adding property in the object creation - small object","opsSec":4013824.8761250842,"samples":2006913},{"name":"Adding property after the function creation - small class","opsSec":295172.59084600967,"samples":147587},{"name":"Adding property in the function creation - small class","opsSec":315489.0787719247,"samples":157745},{"name":"Adding property after the class creation - small class","opsSec":310888.47602480854,"samples":155445},{"name":"Adding property in the class creation - small class","opsSec":305957.986537952,"samples":152979}]}-->
