## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,955,774|2477888|
|Adding property in the object creation - small object|4,937,509|2468755|
|Adding property after the function creation - small class|260,675|130338|
|Adding property in the function creation - small class|273,535|136768|
|Adding property after the class creation - small class|273,512|136757|
|Adding property in the class creation - small class|274,201|137101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:15:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4955774.939462461,"samples":2477888},{"name":"Adding property in the object creation - small object","opsSec":4937509.5654928675,"samples":2468755},{"name":"Adding property after the function creation - small class","opsSec":260675.9103275238,"samples":130338},{"name":"Adding property in the function creation - small class","opsSec":273535.13617641723,"samples":136768},{"name":"Adding property after the class creation - small class","opsSec":273512.9978482406,"samples":136757},{"name":"Adding property in the class creation - small class","opsSec":274201.9210299058,"samples":137101}]}-->
