## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,281,732|48640873|
|Using parseInt(x, 10) - big number (10 len)|97,132,358|48568415|
|Using + - small number (2 len)|96,970,077|48490574|
|Using + - big number (10 len)|96,749,181|48386252|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48640873,"opsSec":97281732.18599403},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48568415,"opsSec":97132358.80325957},{"name":"Using + - small number (2 len)","samples":48490574,"opsSec":96970077.70198938},{"name":"Using + - big number (10 len)","samples":48386252,"opsSec":96749181.25536987}]}-->
