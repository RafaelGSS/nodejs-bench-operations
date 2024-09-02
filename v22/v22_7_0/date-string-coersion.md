## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|884,375|442188|
|Using brackets {}|891,586|445794|
|Using '' + |813,670|406836|
|Using date.toString()|964,779|482390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":884375.209368144,"samples":442188},{"name":"Using brackets {}","opsSec":891586.0955714049,"samples":445794},{"name":"Using '' + ","opsSec":813670.668834344,"samples":406836},{"name":"Using date.toString()","opsSec":964779.324654546,"samples":482390}]}-->
