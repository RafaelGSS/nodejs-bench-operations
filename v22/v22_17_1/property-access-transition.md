## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,148,758|4081898|
|Adding property in the object creation - small object|8,218,589|4109299|
|Adding property after the function creation - small class|244,654|125400|
|Adding property in the function creation - small class|265,962|132982|
|Adding property after the class creation - small class|265,497|132752|
|Adding property in the class creation - small class|270,111|135059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:43:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4081898,"opsSec":8148758.899632295},{"name":"Adding property in the object creation - small object","samples":4109299,"opsSec":8218589.107486585},{"name":"Adding property after the function creation - small class","samples":125400,"opsSec":244654.8896176058},{"name":"Adding property in the function creation - small class","samples":132982,"opsSec":265962.94625480694},{"name":"Adding property after the class creation - small class","samples":132752,"opsSec":265497.1156597909},{"name":"Adding property in the class creation - small class","samples":135059,"opsSec":270111.21534649294}]}-->
