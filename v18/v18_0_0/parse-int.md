## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|17,482,525|8741263|
|Using parseInt(x, 10) - big number (10 len)|9,186,636|4593319|
|Using + - small number (2 len)|18,227,799|9113900|
|Using + - big number (10 len)|18,097,067|9048534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":17482525.22654603,"samples":8741263},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9186636.588682316,"samples":4593319},{"name":"Using + - small number (2 len)","opsSec":18227799.937256847,"samples":9113900},{"name":"Using + - big number (10 len)","opsSec":18097067.89240274,"samples":9048534}]}-->
