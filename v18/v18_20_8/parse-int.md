## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,040,358|46024822|
|Using parseInt(x, 10) - big number (10 len)|17,232,166|8616557|
|Using + - small number (2 len)|107,196,083|53607965|
|Using + - big number (10 len)|107,193,253|53607777|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46024822,"opsSec":92040358.04827651},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8616557,"opsSec":17232166.299782176},{"name":"Using + - small number (2 len)","samples":53607965,"opsSec":107196083.71706063},{"name":"Using + - big number (10 len)","samples":53607777,"opsSec":107193253.30119672}]}-->
