## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,973,579|3986792|
|Adding property in the object creation - small object|7,668,356|3834181|
|Adding property after the function creation - small class|268,237|134125|
|Adding property in the function creation - small class|287,374|144514|
|Adding property after the class creation - small class|277,665|139996|
|Adding property in the class creation - small class|270,605|137939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7973579.056380985,"samples":3986792},{"name":"Adding property in the object creation - small object","opsSec":7668356.908211012,"samples":3834181},{"name":"Adding property after the function creation - small class","opsSec":268237.2817975209,"samples":134125},{"name":"Adding property in the function creation - small class","opsSec":287374.0914099095,"samples":144514},{"name":"Adding property after the class creation - small class","opsSec":277665.85650842753,"samples":139996},{"name":"Adding property in the class creation - small class","opsSec":270605.0888218893,"samples":137939}]}-->
