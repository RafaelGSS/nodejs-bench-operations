## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,560,213|49280112|
|Using parseInt(x, 10) - big number (10 len)|94,647,439|47323765|
|Using + - small number (2 len)|98,037,819|49041688|
|Using + - big number (10 len)|98,961,387|49480704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:35:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49280112,"opsSec":98560213.15837656},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47323765,"opsSec":94647439.32775313},{"name":"Using + - small number (2 len)","samples":49041688,"opsSec":98037819.98188646},{"name":"Using + - big number (10 len)","samples":49480704,"opsSec":98961387.41603144}]}-->
