## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|132,697,516|66558251|
|Using parseInt(x, 10) - big number (10 len)|97,283,478|48641745|
|Using + - small number (2 len)|97,465,419|48739985|
|Using + - big number (10 len)|98,227,554|49141323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:22:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":132697516.22738783,"samples":66558251},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97283478.71511647,"samples":48641745},{"name":"Using + - small number (2 len)","opsSec":97465419.38753964,"samples":48739985},{"name":"Using + - big number (10 len)","opsSec":98227554.29035582,"samples":49141323}]}-->
