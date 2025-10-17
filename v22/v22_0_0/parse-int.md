## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,654,211|48828390|
|Using parseInt(x, 10) - big number (10 len)|97,725,561|48867336|
|Using + - small number (2 len)|98,234,064|49124653|
|Using + - big number (10 len)|97,932,854|48966645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:36:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48828390,"opsSec":97654211.69423243},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48867336,"opsSec":97725561.6322424},{"name":"Using + - small number (2 len)","samples":49124653,"opsSec":98234064.9848176},{"name":"Using + - big number (10 len)","samples":48966645,"opsSec":97932854.00293398}]}-->
