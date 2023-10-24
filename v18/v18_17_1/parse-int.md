## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|157,082,754|95|
|Using parseInt(x, 10) - big number (10 len)|13,913,402|95|
|Using + - small number (2 len)|711,339,290|98|
|Using + - big number (10 len)|710,513,763|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":157082753.90944093,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":13913401.60636825,"samples":8},{"name":"Using + - small number (2 len)","opsSec":711339290.2075824,"samples":7},{"name":"Using + - big number (10 len)","opsSec":710513763.0329398,"samples":7}]}-->
