## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,948,954|3974479|
|Adding property in the object creation - small object|7,842,050|3921732|
|Adding property after the function creation - small class|272,475|137028|
|Adding property in the function creation - small class|283,529|143018|
|Adding property after the class creation - small class|279,079|139547|
|Adding property in the class creation - small class|267,643|134095|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3974479,"opsSec":7948954.041420888},{"name":"Adding property in the object creation - small object","samples":3921732,"opsSec":7842050.627215457},{"name":"Adding property after the function creation - small class","samples":137028,"opsSec":272475.9436102138},{"name":"Adding property in the function creation - small class","samples":143018,"opsSec":283529.7725986866},{"name":"Adding property after the class creation - small class","samples":139547,"opsSec":279079.140710232},{"name":"Adding property in the class creation - small class","samples":134095,"opsSec":267643.1937142277}]}-->
