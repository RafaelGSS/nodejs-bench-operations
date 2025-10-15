## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,121,858|46560936|
|Using parseInt(x, 10) - big number (10 len)|17,541,571|8787763|
|Using + - small number (2 len)|107,090,486|53545256|
|Using + - big number (10 len)|103,534,372|51767816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46560936,"opsSec":93121858.0317213},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8787763,"opsSec":17541571.831899304},{"name":"Using + - small number (2 len)","samples":53545256,"opsSec":107090486.08410236},{"name":"Using + - big number (10 len)","samples":51767816,"opsSec":103534372.40082537}]}-->
