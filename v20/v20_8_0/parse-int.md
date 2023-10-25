## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|743,774,027|85|
|Using parseInt(x, 10) - big number (10 len)|766,117,088|88|
|Using + - small number (2 len)|780,768,953|88|
|Using + - big number (10 len)|766,540,912|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":743774027.1354599,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":766117087.6752459,"samples":6},{"name":"Using + - small number (2 len)","opsSec":780768953.053184,"samples":6},{"name":"Using + - big number (10 len)","opsSec":766540912.0837622,"samples":7}]}-->
