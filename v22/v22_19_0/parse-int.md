## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,400,883|47700448|
|Using parseInt(x, 10) - big number (10 len)|95,385,003|47704110|
|Using + - small number (2 len)|95,704,687|47852350|
|Using + - big number (10 len)|93,759,512|46886414|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:59:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47700448,"opsSec":95400883.21628165},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47704110,"opsSec":95385003.29019916},{"name":"Using + - small number (2 len)","samples":47852350,"opsSec":95704687.17557192},{"name":"Using + - big number (10 len)","samples":46886414,"opsSec":93759512.64905162}]}-->
