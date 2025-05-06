## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,564,374|1782213|
|Adding property in the object creation - small object|3,731,274|1865654|
|Adding property after the function creation - small class|184,051|92742|
|Adding property in the function creation - small class|189,354|94854|
|Adding property after the class creation - small class|157,393|80029|
|Adding property in the class creation - small class|160,475|80242|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:20:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1782213,"opsSec":3564374.0884557758},{"name":"Adding property in the object creation - small object","samples":1865654,"opsSec":3731274.090181068},{"name":"Adding property after the function creation - small class","samples":92742,"opsSec":184051.90026234233},{"name":"Adding property in the function creation - small class","samples":94854,"opsSec":189354.14671058435},{"name":"Adding property after the class creation - small class","samples":80029,"opsSec":157393.20151759073},{"name":"Adding property in the class creation - small class","samples":80242,"opsSec":160475.6687451814}]}-->
