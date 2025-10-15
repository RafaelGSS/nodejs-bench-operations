## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,619,904|47868658|
|Using parseInt(x, 10) - big number (10 len)|95,955,693|47977853|
|Using + - small number (2 len)|94,720,125|47404866|
|Using + - big number (10 len)|92,308,080|46154139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:01:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47868658,"opsSec":95619904.51049137},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47977853,"opsSec":95955693.52575983},{"name":"Using + - small number (2 len)","samples":47404866,"opsSec":94720125.6245177},{"name":"Using + - big number (10 len)","samples":46154139,"opsSec":92308080.27609205}]}-->
