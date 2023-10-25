## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|169,748,230|89|
|Using parseInt(x, 10) - big number (10 len)|13,395,959|93|
|Using + - small number (2 len)|735,841,113|93|
|Using + - big number (10 len)|725,745,980|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":169748230.18710756,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13395958.576349026,"samples":4},{"name":"Using + - small number (2 len)","opsSec":735841112.6820475,"samples":9},{"name":"Using + - big number (10 len)","opsSec":725745979.8071882,"samples":8}]}-->
