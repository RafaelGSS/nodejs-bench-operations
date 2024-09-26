## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|117,427,306|58713699|
|Using parseInt(x, 10) - big number (10 len)|96,156,765|48078401|
|Using + - small number (2 len)|93,306,824|46672657|
|Using + - big number (10 len)|93,108,994|46554514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":117427306.87640986,"samples":58713699},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":96156765.84505604,"samples":48078401},{"name":"Using + - small number (2 len)","opsSec":93306824.56164102,"samples":46672657},{"name":"Using + - big number (10 len)","opsSec":93108994.10832615,"samples":46554514}]}-->
