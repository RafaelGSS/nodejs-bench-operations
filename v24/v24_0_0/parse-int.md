## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,219,377|47610651|
|Using parseInt(x, 10) - big number (10 len)|94,191,061|47096507|
|Using + - small number (2 len)|94,667,082|47339484|
|Using + - big number (10 len)|95,563,166|47781585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:59:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47610651,"opsSec":95219377.80681328},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47096507,"opsSec":94191061.98443143},{"name":"Using + - small number (2 len)","samples":47339484,"opsSec":94667082.35847571},{"name":"Using + - big number (10 len)","samples":47781585,"opsSec":95563166.17747335}]}-->
