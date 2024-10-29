## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|124,940,448|62481897|
|Using parseInt(x, 10) - big number (10 len)|97,971,779|49028505|
|Using + - small number (2 len)|96,837,132|48418580|
|Using + - big number (10 len)|95,442,867|47722595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:32:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":124940448.12762466,"samples":62481897},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97971779.45046706,"samples":49028505},{"name":"Using + - small number (2 len)","opsSec":96837132.69192858,"samples":48418580},{"name":"Using + - big number (10 len)","opsSec":95442867.68414351,"samples":47722595}]}-->
