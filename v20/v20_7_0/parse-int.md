## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|712,772,886|94|
|Using parseInt(x, 10) - big number (10 len)|717,443,836|96|
|Using + - small number (2 len)|718,132,941|97|
|Using + - big number (10 len)|714,407,679|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":712772885.5928516,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":717443836.0608932,"samples":7},{"name":"Using + - small number (2 len)","opsSec":718132941.2196827,"samples":6},{"name":"Using + - big number (10 len)","opsSec":714407678.9062715,"samples":7}]}-->
