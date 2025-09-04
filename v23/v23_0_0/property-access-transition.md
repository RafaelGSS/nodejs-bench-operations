## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,926,360|3963191|
|Adding property in the object creation - small object|7,509,642|3755179|
|Adding property after the function creation - small class|276,689|138345|
|Adding property in the function creation - small class|289,132|144567|
|Adding property after the class creation - small class|271,858|136774|
|Adding property in the class creation - small class|271,537|135769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3963191,"opsSec":7926360.915879963},{"name":"Adding property in the object creation - small object","samples":3755179,"opsSec":7509642.871728611},{"name":"Adding property after the function creation - small class","samples":138345,"opsSec":276689.064790961},{"name":"Adding property in the function creation - small class","samples":144567,"opsSec":289132.2721455417},{"name":"Adding property after the class creation - small class","samples":136774,"opsSec":271858.740469992},{"name":"Adding property in the class creation - small class","samples":135769,"opsSec":271537.19353453524}]}-->
