## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,292,281|48146445|
|Using parseInt(x, 10) - big number (10 len)|96,703,370|48352602|
|Using + - small number (2 len)|96,893,969|48446997|
|Using + - big number (10 len)|96,978,480|48493401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48146445,"opsSec":96292281.43278134},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48352602,"opsSec":96703370.8909014},{"name":"Using + - small number (2 len)","samples":48446997,"opsSec":96893969.38893178},{"name":"Using + - big number (10 len)","samples":48493401,"opsSec":96978480.6644881}]}-->
