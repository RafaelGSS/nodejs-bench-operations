## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,789,246|3895313|
|Adding property in the object creation - small object|7,538,101|3769127|
|Adding property after the function creation - small class|275,961|138004|
|Adding property in the function creation - small class|284,315|142158|
|Adding property after the class creation - small class|274,117|137080|
|Adding property in the class creation - small class|270,608|135455|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3895313,"opsSec":7789246.15062291},{"name":"Adding property in the object creation - small object","samples":3769127,"opsSec":7538101.715269148},{"name":"Adding property after the function creation - small class","samples":138004,"opsSec":275961.9717508078},{"name":"Adding property in the function creation - small class","samples":142158,"opsSec":284315.75491981924},{"name":"Adding property after the class creation - small class","samples":137080,"opsSec":274117.0727181782},{"name":"Adding property in the class creation - small class","samples":135455,"opsSec":270608.5399216589}]}-->
