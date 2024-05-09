## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,719,202|1859602|
|Adding property in the object creation - small object|3,724,626|1862314|
|Adding property after the function creation - small class|264,046|132024|
|Adding property in the function creation - small class|272,252|136127|
|Adding property after the class creation - small class|262,285|131143|
|Adding property in the class creation - small class|263,326|132700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:43:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3719202.289168795,"samples":1859602},{"name":"Adding property in the object creation - small object","opsSec":3724626.852815513,"samples":1862314},{"name":"Adding property after the function creation - small class","opsSec":264046.5382383116,"samples":132024},{"name":"Adding property in the function creation - small class","opsSec":272252.5935431394,"samples":136127},{"name":"Adding property after the class creation - small class","opsSec":262285.60552239255,"samples":131143},{"name":"Adding property in the class creation - small class","opsSec":263326.4135107415,"samples":132700}]}-->
