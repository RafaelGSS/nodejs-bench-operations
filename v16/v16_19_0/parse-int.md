## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|148,458,959|86|
|Using parseInt(x, 10) - big number (10 len)|11,872,009|91|
|Using + - small number (2 len)|713,266,250|95|
|Using + - big number (10 len)|712,533,457|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":148458959.35967767,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11872008.94470574,"samples":6},{"name":"Using + - small number (2 len)","opsSec":713266249.8498825,"samples":6},{"name":"Using + - big number (10 len)","opsSec":712533457.4916795,"samples":7}]}-->
