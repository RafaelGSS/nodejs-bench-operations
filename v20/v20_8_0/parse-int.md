## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|595,316,694|94|
|Using parseInt(x, 10) - big number (10 len)|598,332,817|97|
|Using + - small number (2 len)|595,746,961|95|
|Using + - big number (10 len)|597,742,801|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":595316693.6618696,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":598332816.5916547,"samples":6},{"name":"Using + - small number (2 len)","opsSec":595746960.769768,"samples":6},{"name":"Using + - big number (10 len)","opsSec":597742800.5607612,"samples":7}]}-->
