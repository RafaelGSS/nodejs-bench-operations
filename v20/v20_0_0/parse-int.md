## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|916,490,395|99|
|Using parseInt(x, 10) - big number (10 len)|915,904,407|96|
|Using + - small number (2 len)|916,165,091|98|
|Using + - big number (10 len)|914,983,687|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:05:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":916490395.4005027,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":915904407.2573998,"samples":6},{"name":"Using + - small number (2 len)","opsSec":916165090.9576342,"samples":6},{"name":"Using + - big number (10 len)","opsSec":914983686.788669,"samples":6}]}-->
