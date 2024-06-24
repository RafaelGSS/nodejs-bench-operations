## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|19,716,112|9858057|
|Using parseInt(x, 10) - big number (10 len)|19,697,112|9848557|
|Using + - small number (2 len)|19,711,625|9855813|
|Using + - big number (10 len)|19,775,315|9887658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:09:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":19716112.1861267,"samples":9858057},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19697112.14848133,"samples":9848557},{"name":"Using + - small number (2 len)","opsSec":19711625.21144358,"samples":9855813},{"name":"Using + - big number (10 len)","opsSec":19775315.723074622,"samples":9887658}]}-->
