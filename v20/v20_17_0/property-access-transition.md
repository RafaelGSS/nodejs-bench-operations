## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,035,982|2517992|
|Adding property in the object creation - small object|5,054,003|2527002|
|Adding property after the function creation - small class|248,934|124468|
|Adding property in the function creation - small class|247,864|123933|
|Adding property after the class creation - small class|232,905|116453|
|Adding property in the class creation - small class|239,488|119745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:11:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5035982.30790448,"samples":2517992},{"name":"Adding property in the object creation - small object","opsSec":5054003.252006898,"samples":2527002},{"name":"Adding property after the function creation - small class","opsSec":248934.1852697492,"samples":124468},{"name":"Adding property in the function creation - small class","opsSec":247864.2475997876,"samples":123933},{"name":"Adding property after the class creation - small class","opsSec":232905.6161714536,"samples":116453},{"name":"Adding property in the class creation - small class","opsSec":239488.50702867322,"samples":119745}]}-->
