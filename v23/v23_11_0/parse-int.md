## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,940,603|46970625|
|Using parseInt(x, 10) - big number (10 len)|96,999,851|48515372|
|Using + - small number (2 len)|97,143,115|48573584|
|Using + - big number (10 len)|97,153,345|48592831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46970625,"opsSec":93940603.12500688},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48515372,"opsSec":96999851.09942245},{"name":"Using + - small number (2 len)","samples":48573584,"opsSec":97143115.38351242},{"name":"Using + - big number (10 len)","samples":48592831,"opsSec":97153345.10559078}]}-->
