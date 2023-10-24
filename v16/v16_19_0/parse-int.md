## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|213,563,380|90|
|Using parseInt(x, 10) - big number (10 len)|14,778,241|94|
|Using + - small number (2 len)|594,468,719|95|
|Using + - big number (10 len)|594,033,916|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":213563379.89093274,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14778240.836249026,"samples":6},{"name":"Using + - small number (2 len)","opsSec":594468718.8108659,"samples":7},{"name":"Using + - big number (10 len)","opsSec":594033916.4666477,"samples":6}]}-->
