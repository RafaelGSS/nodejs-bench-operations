## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,824,218|1412110|
|Adding property in the object creation - small object|2,833,602|1416802|
|Adding property after the function creation - small class|186,731|93367|
|Adding property in the function creation - small class|191,877|95939|
|Adding property after the class creation - small class|160,975|80488|
|Adding property in the class creation - small class|157,104|78553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2824218.8211285523,"samples":1412110},{"name":"Adding property in the object creation - small object","opsSec":2833602.1054952852,"samples":1416802},{"name":"Adding property after the function creation - small class","opsSec":186731.26689010966,"samples":93367},{"name":"Adding property in the function creation - small class","opsSec":191877.28241799565,"samples":95939},{"name":"Adding property after the class creation - small class","opsSec":160975.64319700006,"samples":80488},{"name":"Adding property in the class creation - small class","opsSec":157104.788154009,"samples":78553}]}-->
