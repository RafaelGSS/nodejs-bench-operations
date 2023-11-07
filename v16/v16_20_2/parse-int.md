## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|295,201,744|92|
|Using parseInt(x, 10) - big number (10 len)|21,681,932|96|
|Using + - small number (2 len)|850,069,781|91|
|Using + - big number (10 len)|849,397,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":295201743.9700857,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21681932.347579516,"samples":7},{"name":"Using + - small number (2 len)","opsSec":850069780.8771013,"samples":7},{"name":"Using + - big number (10 len)","opsSec":849397109.9664569,"samples":7}]}-->
