## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|911,393,550|96|
|Using parseInt(x, 10) - big number (10 len)|912,194,564|98|
|Using + - small number (2 len)|912,241,958|97|
|Using + - big number (10 len)|911,091,167|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:08:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":911393550.4215589,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":912194563.739854,"samples":6},{"name":"Using + - small number (2 len)","opsSec":912241957.8979269,"samples":7},{"name":"Using + - big number (10 len)","opsSec":911091167.4315401,"samples":6}]}-->
