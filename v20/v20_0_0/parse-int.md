## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,334,709|49538154|
|Using parseInt(x, 10) - big number (10 len)|98,060,383|49038351|
|Using + - small number (2 len)|99,403,486|49780173|
|Using + - big number (10 len)|65,164,099|32596594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:35:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49538154,"opsSec":97334709.52791278},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49038351,"opsSec":98060383.96762472},{"name":"Using + - small number (2 len)","samples":49780173,"opsSec":99403486.50307025},{"name":"Using + - big number (10 len)","samples":32596594,"opsSec":65164099.78848002}]}-->
