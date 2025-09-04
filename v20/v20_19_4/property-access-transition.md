## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,447,878|3724245|
|Adding property in the object creation - small object|7,416,000|3708300|
|Adding property after the function creation - small class|234,854|117436|
|Adding property in the function creation - small class|240,494|120672|
|Adding property after the class creation - small class|230,800|115802|
|Adding property in the class creation - small class|224,050|115687|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:46:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3724245,"opsSec":7447878.365332882},{"name":"Adding property in the object creation - small object","samples":3708300,"opsSec":7416000.104919514},{"name":"Adding property after the function creation - small class","samples":117436,"opsSec":234854.88894250142},{"name":"Adding property in the function creation - small class","samples":120672,"opsSec":240494.4916872335},{"name":"Adding property after the class creation - small class","samples":115802,"opsSec":230800.3329303074},{"name":"Adding property in the class creation - small class","samples":115687,"opsSec":224050.4438727919}]}-->
