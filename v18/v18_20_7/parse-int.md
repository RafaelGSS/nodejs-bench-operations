## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,187,187|46689348|
|Using parseInt(x, 10) - big number (10 len)|16,060,192|8030206|
|Using + - small number (2 len)|107,080,598|53552343|
|Using + - big number (10 len)|104,010,402|52005214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:30:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46689348,"opsSec":93187187.19796383},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8030206,"opsSec":16060192.00748988},{"name":"Using + - small number (2 len)","samples":53552343,"opsSec":107080598.86176965},{"name":"Using + - big number (10 len)","samples":52005214,"opsSec":104010402.20542024}]}-->
