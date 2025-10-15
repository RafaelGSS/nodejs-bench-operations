## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,777,158|3888581|
|Adding property in the object creation - small object|7,821,645|3910826|
|Adding property after the function creation - small class|281,919|143295|
|Adding property in the function creation - small class|297,809|149019|
|Adding property after the class creation - small class|283,559|141783|
|Adding property in the class creation - small class|274,226|144249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3888581,"opsSec":7777158.406952816},{"name":"Adding property in the object creation - small object","samples":3910826,"opsSec":7821645.554964063},{"name":"Adding property after the function creation - small class","samples":143295,"opsSec":281919.91318971803},{"name":"Adding property in the function creation - small class","samples":149019,"opsSec":297809.9079870925},{"name":"Adding property after the class creation - small class","samples":141783,"opsSec":283559.0380584976},{"name":"Adding property in the class creation - small class","samples":144249,"opsSec":274226.60887461936}]}-->
