## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,292,842|48646762|
|Using parseInt(x, 10) - big number (10 len)|96,822,870|48411445|
|Using + - small number (2 len)|97,811,689|48906425|
|Using + - big number (10 len)|93,991,373|46995791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48646762,"opsSec":97292842.17176205},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48411445,"opsSec":96822870.63542588},{"name":"Using + - small number (2 len)","samples":48906425,"opsSec":97811689.75773609},{"name":"Using + - big number (10 len)","samples":46995791,"opsSec":93991373.90309818}]}-->
