## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|217,428,208|91|
|Using parseInt(x, 10) - big number (10 len)|15,158,517|95|
|Using + - small number (2 len)|594,858,426|98|
|Using + - big number (10 len)|594,971,159|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":217428207.62218094,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15158516.783278037,"samples":7},{"name":"Using + - small number (2 len)","opsSec":594858425.5540836,"samples":6},{"name":"Using + - big number (10 len)","opsSec":594971158.5777063,"samples":8}]}-->
