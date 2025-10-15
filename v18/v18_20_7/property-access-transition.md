## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,720,562|1860654|
|Adding property in the object creation - small object|3,730,694|1865571|
|Adding property after the function creation - small class|190,509|95259|
|Adding property in the function creation - small class|191,712|95857|
|Adding property after the class creation - small class|159,551|80737|
|Adding property in the class creation - small class|161,696|81387|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:11:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1860654,"opsSec":3720562.815914726},{"name":"Adding property in the object creation - small object","samples":1865571,"opsSec":3730694.398747427},{"name":"Adding property after the function creation - small class","samples":95259,"opsSec":190509.5604264731},{"name":"Adding property in the function creation - small class","samples":95857,"opsSec":191712.80371210483},{"name":"Adding property after the class creation - small class","samples":80737,"opsSec":159551.64014904454},{"name":"Adding property in the class creation - small class","samples":81387,"opsSec":161696.72917479262}]}-->
