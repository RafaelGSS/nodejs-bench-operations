## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|132,214,453|66107241|
|Using parseInt(x, 10) - big number (10 len)|17,222,411|8618478|
|Using + - small number (2 len)|104,781,265|52390642|
|Using + - big number (10 len)|106,028,083|53015910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:28:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":132214453.1772492,"samples":66107241},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":17222411.53567883,"samples":8618478},{"name":"Using + - small number (2 len)","opsSec":104781265.13937227,"samples":52390642},{"name":"Using + - big number (10 len)","opsSec":106028083.1462376,"samples":53015910}]}-->
