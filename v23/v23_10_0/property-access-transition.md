## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,993,614|3996810|
|Adding property in the object creation - small object|7,915,335|3963985|
|Adding property after the function creation - small class|267,920|133968|
|Adding property in the function creation - small class|285,678|142840|
|Adding property after the class creation - small class|268,172|136561|
|Adding property in the class creation - small class|268,822|134486|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:21:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3996810,"opsSec":7993614.32453383},{"name":"Adding property in the object creation - small object","samples":3963985,"opsSec":7915335.920739439},{"name":"Adding property after the function creation - small class","samples":133968,"opsSec":267920.07911721856},{"name":"Adding property in the function creation - small class","samples":142840,"opsSec":285678.90699250187},{"name":"Adding property after the class creation - small class","samples":136561,"opsSec":268172.61006309214},{"name":"Adding property in the class creation - small class","samples":134486,"opsSec":268822.6743808349}]}-->
