## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|210,643,196|89|
|Using parseInt(x, 10) - big number (10 len)|15,208,836|97|
|Using + - small number (2 len)|593,859,553|98|
|Using + - big number (10 len)|591,605,663|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":210643195.8451736,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15208836.208415875,"samples":6},{"name":"Using + - small number (2 len)","opsSec":593859552.5389,"samples":8},{"name":"Using + - big number (10 len)","opsSec":591605662.7159547,"samples":12}]}-->
