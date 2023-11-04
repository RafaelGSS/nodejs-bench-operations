## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|820,947,762|97|
|Using parseInt(x, 10) - big number (10 len)|821,963,212|91|
|Using + - small number (2 len)|822,076,793|96|
|Using + - big number (10 len)|821,127,266|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":820947762.4204906,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":821963211.5578542,"samples":6},{"name":"Using + - small number (2 len)","opsSec":822076792.9511677,"samples":7},{"name":"Using + - big number (10 len)","opsSec":821127266.4135127,"samples":6}]}-->
