## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|188,582,582|97|
|Using parseInt(x, 10) - big number (10 len)|13,796,156|92|
|Using + - small number (2 len)|708,687,667|98|
|Using + - big number (10 len)|705,885,711|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":188582582.1813218,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13796155.560931252,"samples":5},{"name":"Using + - small number (2 len)","opsSec":708687666.722873,"samples":7},{"name":"Using + - big number (10 len)","opsSec":705885710.6736047,"samples":7}]}-->
