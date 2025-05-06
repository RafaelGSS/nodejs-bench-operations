## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|99,837,523|49920110|
|Using parseInt(x, 10) - big number (10 len)|99,855,586|49968427|
|Using + - small number (2 len)|98,691,263|49490190|
|Using + - big number (10 len)|99,643,937|49822691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49920110,"opsSec":99837523.98750223},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49968427,"opsSec":99855586.13180429},{"name":"Using + - small number (2 len)","samples":49490190,"opsSec":98691263.7454751},{"name":"Using + - big number (10 len)","samples":49822691,"opsSec":99643937.7607661}]}-->
