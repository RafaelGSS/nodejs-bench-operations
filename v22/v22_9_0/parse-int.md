## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,119,519|70563201|
|Using parseInt(x, 10) - big number (10 len)|94,911,125|47455568|
|Using + - small number (2 len)|96,387,491|48208840|
|Using + - big number (10 len)|97,375,006|48708328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141119519.3188038,"samples":70563201},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":94911125.36995396,"samples":47455568},{"name":"Using + - small number (2 len)","opsSec":96387491.05225247,"samples":48208840},{"name":"Using + - big number (10 len)","opsSec":97375006.56744097,"samples":48708328}]}-->
