## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|280,640,934|96|
|Using parseInt(x, 10) - big number (10 len)|19,432,141|97|
|Using + - small number (2 len)|847,874,700|98|
|Using + - big number (10 len)|847,515,672|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:27:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":280640934.47386605,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19432140.65330192,"samples":6},{"name":"Using + - small number (2 len)","opsSec":847874700.276059,"samples":7},{"name":"Using + - big number (10 len)","opsSec":847515672.1283529,"samples":8}]}-->
