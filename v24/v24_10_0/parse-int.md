## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,749,039|46938409|
|Using parseInt(x, 10) - big number (10 len)|96,187,428|48097321|
|Using + - small number (2 len)|93,710,895|46855469|
|Using + - big number (10 len)|95,105,213|47630896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46938409,"opsSec":93749039.1845799},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48097321,"opsSec":96187428.90470642},{"name":"Using + - small number (2 len)","samples":46855469,"opsSec":93710895.08041006},{"name":"Using + - big number (10 len)","samples":47630896,"opsSec":95105213.05974354}]}-->
