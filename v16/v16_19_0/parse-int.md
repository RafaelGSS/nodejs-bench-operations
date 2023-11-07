## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|299,779,276|93|
|Using parseInt(x, 10) - big number (10 len)|21,011,632|96|
|Using + - small number (2 len)|850,871,473|94|
|Using + - big number (10 len)|847,662,037|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:06:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":299779275.80775124,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21011631.94523458,"samples":7},{"name":"Using + - small number (2 len)","opsSec":850871473.4338382,"samples":6},{"name":"Using + - big number (10 len)","opsSec":847662036.574831,"samples":8}]}-->
