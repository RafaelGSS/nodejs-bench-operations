## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,643,519|7328090|
|Using indexof|15,004,157|7502441|
|Using RegExp.test|12,964,837|6482421|
|Using RegExp.text with cached regex pattern|13,923,623|6961815|
|Using new RegExp.test|4,661,914|2333124|
|Using new RegExp.test with cached regex pattern|5,248,768|2626555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:19:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":7328090,"opsSec":14643519.593690805},{"name":"Using indexof","samples":7502441,"opsSec":15004157.509250509},{"name":"Using RegExp.test","samples":6482421,"opsSec":12964837.747533219},{"name":"Using RegExp.text with cached regex pattern","samples":6961815,"opsSec":13923623.483744208},{"name":"Using new RegExp.test","samples":2333124,"opsSec":4661914.983118939},{"name":"Using new RegExp.test with cached regex pattern","samples":2626555,"opsSec":5248768.575550568}]}-->
