## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,598,448|3799478|
|Adding property in the object creation - small object|7,628,476|3814565|
|Adding property after the function creation - small class|234,888|118570|
|Adding property in the function creation - small class|244,555|122963|
|Adding property after the class creation - small class|236,662|118775|
|Adding property in the class creation - small class|230,108|115055|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3799478,"opsSec":7598448.788346481},{"name":"Adding property in the object creation - small object","samples":3814565,"opsSec":7628476.5752104735},{"name":"Adding property after the function creation - small class","samples":118570,"opsSec":234888.59051106556},{"name":"Adding property in the function creation - small class","samples":122963,"opsSec":244555.2900980869},{"name":"Adding property after the class creation - small class","samples":118775,"opsSec":236662.8201926413},{"name":"Adding property in the class creation - small class","samples":115055,"opsSec":230108.23230855944}]}-->
