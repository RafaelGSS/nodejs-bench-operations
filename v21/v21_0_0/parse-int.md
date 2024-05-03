## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|910,909,018|99|
|Using parseInt(x, 10) - big number (10 len)|912,391,296|99|
|Using + - small number (2 len)|912,113,631|97|
|Using + - big number (10 len)|910,788,584|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:07:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":910909017.6393812,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":912391296.4273689,"samples":7},{"name":"Using + - small number (2 len)","opsSec":912113631.0120583,"samples":7},{"name":"Using + - big number (10 len)","opsSec":910788583.8374594,"samples":6}]}-->
