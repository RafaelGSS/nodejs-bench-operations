## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|715,499,734|95|
|Using parseInt(x, 10) - big number (10 len)|720,110,025|94|
|Using + - small number (2 len)|718,257,402|95|
|Using + - big number (10 len)|718,659,605|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":715499733.7036717,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":720110025.1969912,"samples":6},{"name":"Using + - small number (2 len)","opsSec":718257402.1094295,"samples":6},{"name":"Using + - big number (10 len)","opsSec":718659605.4326749,"samples":6}]}-->
