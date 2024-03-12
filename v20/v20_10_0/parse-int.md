## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|844,758,679|97|
|Using parseInt(x, 10) - big number (10 len)|846,129,292|99|
|Using + - small number (2 len)|844,776,517|98|
|Using + - big number (10 len)|847,035,642|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":844758679.2603317,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":846129292.110329,"samples":7},{"name":"Using + - small number (2 len)","opsSec":844776516.5994061,"samples":7},{"name":"Using + - big number (10 len)","opsSec":847035642.1723263,"samples":6}]}-->
