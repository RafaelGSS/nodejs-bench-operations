## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|136,529,625|68267206|
|Using parseInt(x, 10) - big number (10 len)|97,121,606|48561689|
|Using + - small number (2 len)|92,679,462|46363940|
|Using + - big number (10 len)|96,166,195|48083144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":136529625.54438767,"samples":68267206},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97121606.11341806,"samples":48561689},{"name":"Using + - small number (2 len)","opsSec":92679462.76577976,"samples":46363940},{"name":"Using + - big number (10 len)","opsSec":96166195.87278436,"samples":48083144}]}-->
