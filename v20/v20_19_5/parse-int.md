## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,300,646|50156067|
|Using parseInt(x, 10) - big number (10 len)|100,112,374|50056193|
|Using + - small number (2 len)|98,410,116|49205064|
|Using + - big number (10 len)|100,789,628|50395773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50156067,"opsSec":100300646.96810533},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50056193,"opsSec":100112374.78741403},{"name":"Using + - small number (2 len)","samples":49205064,"opsSec":98410116.58442648},{"name":"Using + - big number (10 len)","samples":50395773,"opsSec":100789628.98125677}]}-->
