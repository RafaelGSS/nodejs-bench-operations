## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|99,960,926|49988486|
|Using parseInt(x, 10) - big number (10 len)|100,570,212|50360739|
|Using + - small number (2 len)|99,860,590|49930301|
|Using + - big number (10 len)|101,207,034|50618171|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49988486,"opsSec":99960926.47200458},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50360739,"opsSec":100570212.35500109},{"name":"Using + - small number (2 len)","samples":49930301,"opsSec":99860590.0167292},{"name":"Using + - big number (10 len)","samples":50618171,"opsSec":101207034.87167001}]}-->
