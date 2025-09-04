## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,800,336|1900212|
|Adding property in the object creation - small object|3,693,640|1846821|
|Adding property after the function creation - small class|191,426|96584|
|Adding property in the function creation - small class|194,305|97153|
|Adding property after the class creation - small class|162,198|82441|
|Adding property in the class creation - small class|164,125|82063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:45:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1900212,"opsSec":3800336.911479336},{"name":"Adding property in the object creation - small object","samples":1846821,"opsSec":3693640.5742547386},{"name":"Adding property after the function creation - small class","samples":96584,"opsSec":191426.38323979327},{"name":"Adding property in the function creation - small class","samples":97153,"opsSec":194305.17498022702},{"name":"Adding property after the class creation - small class","samples":82441,"opsSec":162198.71135867437},{"name":"Adding property in the class creation - small class","samples":82063,"opsSec":164125.6553361238}]}-->
