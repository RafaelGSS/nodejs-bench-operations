## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,582,242|94|
|Using parseInt(x, 10) - big number (10 len)|21,076,756|99|
|Using + - small number (2 len)|848,666,522|95|
|Using + - big number (10 len)|848,489,694|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:08:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":283582242.0978211,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21076755.95933576,"samples":6},{"name":"Using + - small number (2 len)","opsSec":848666521.9084295,"samples":8},{"name":"Using + - big number (10 len)","opsSec":848489693.7719563,"samples":7}]}-->
