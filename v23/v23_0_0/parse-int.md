## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|125,758,684|62879399|
|Using parseInt(x, 10) - big number (10 len)|97,804,665|48967101|
|Using + - small number (2 len)|89,337,397|44668713|
|Using + - big number (10 len)|95,386,166|47693095|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:31:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":125758684.81718366,"samples":62879399},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97804665.39335708,"samples":48967101},{"name":"Using + - small number (2 len)","opsSec":89337397.76938231,"samples":44668713},{"name":"Using + - big number (10 len)","opsSec":95386166.72577532,"samples":47693095}]}-->
