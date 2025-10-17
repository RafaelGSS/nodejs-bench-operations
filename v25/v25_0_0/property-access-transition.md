## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,429,363|3714938|
|Adding property in the object creation - small object|7,495,653|3750445|
|Adding property after the function creation - small class|296,123|148067|
|Adding property in the function creation - small class|309,567|154927|
|Adding property after the class creation - small class|289,276|144641|
|Adding property in the class creation - small class|312,898|156450|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3714938,"opsSec":7429363.210492486},{"name":"Adding property in the object creation - small object","samples":3750445,"opsSec":7495653.416592713},{"name":"Adding property after the function creation - small class","samples":148067,"opsSec":296123.48880064156},{"name":"Adding property in the function creation - small class","samples":154927,"opsSec":309567.1816722401},{"name":"Adding property after the class creation - small class","samples":144641,"opsSec":289276.8572360321},{"name":"Adding property in the class creation - small class","samples":156450,"opsSec":312898.3616641783}]}-->
