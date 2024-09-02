## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,830,357|2415179|
|Adding property in the object creation - small object|4,831,869|2415935|
|Adding property after the function creation - small class|249,495|124748|
|Adding property in the function creation - small class|251,972|125987|
|Adding property after the class creation - small class|238,926|119464|
|Adding property in the class creation - small class|240,104|120053|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:13:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4830357.381717456,"samples":2415179},{"name":"Adding property in the object creation - small object","opsSec":4831869.826068149,"samples":2415935},{"name":"Adding property after the function creation - small class","opsSec":249495.33384753534,"samples":124748},{"name":"Adding property in the function creation - small class","opsSec":251972.61616640934,"samples":125987},{"name":"Adding property after the class creation - small class","opsSec":238926.92817362424,"samples":119464},{"name":"Adding property in the class creation - small class","opsSec":240104.44508371095,"samples":120053}]}-->
