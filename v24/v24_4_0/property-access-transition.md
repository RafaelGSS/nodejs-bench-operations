## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,070,032|3535202|
|Adding property in the object creation - small object|7,425,788|3716099|
|Adding property after the function creation - small class|273,415|136708|
|Adding property in the function creation - small class|291,115|145731|
|Adding property after the class creation - small class|283,574|141788|
|Adding property in the class creation - small class|272,353|143656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:33:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3535202,"opsSec":7070032.003196119},{"name":"Adding property in the object creation - small object","samples":3716099,"opsSec":7425788.282328343},{"name":"Adding property after the function creation - small class","samples":136708,"opsSec":273415.35583342164},{"name":"Adding property in the function creation - small class","samples":145731,"opsSec":291115.29333025543},{"name":"Adding property after the class creation - small class","samples":141788,"opsSec":283574.7709869425},{"name":"Adding property in the class creation - small class","samples":143656,"opsSec":272353.10949962115}]}-->
