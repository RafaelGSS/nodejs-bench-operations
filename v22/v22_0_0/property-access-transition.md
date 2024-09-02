## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,948,881|2474441|
|Adding property in the object creation - small object|4,928,121|2464061|
|Adding property after the function creation - small class|250,846|125704|
|Adding property in the function creation - small class|291,621|145811|
|Adding property after the class creation - small class|264,231|132116|
|Adding property in the class creation - small class|270,803|135402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4948881.396234564,"samples":2474441},{"name":"Adding property in the object creation - small object","opsSec":4928121.970418493,"samples":2464061},{"name":"Adding property after the function creation - small class","opsSec":250846.7059125736,"samples":125704},{"name":"Adding property in the function creation - small class","opsSec":291621.3747635661,"samples":145811},{"name":"Adding property after the class creation - small class","opsSec":264231.468894784,"samples":132116},{"name":"Adding property in the class creation - small class","opsSec":270803.8201862607,"samples":135402}]}-->
