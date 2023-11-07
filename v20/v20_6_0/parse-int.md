## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|853,592,730|97|
|Using parseInt(x, 10) - big number (10 len)|850,961,112|96|
|Using + - small number (2 len)|855,513,783|93|
|Using + - big number (10 len)|854,860,140|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:11:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":853592730.3130379,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":850961112.4529657,"samples":6},{"name":"Using + - small number (2 len)","opsSec":855513782.6729845,"samples":6},{"name":"Using + - big number (10 len)","opsSec":854860140.4841886,"samples":6}]}-->
