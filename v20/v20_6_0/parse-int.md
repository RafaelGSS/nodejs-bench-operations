## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|593,139,222|96|
|Using parseInt(x, 10) - big number (10 len)|598,446,340|94|
|Using + - small number (2 len)|599,057,031|98|
|Using + - big number (10 len)|598,966,164|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":593139221.7400622,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":598446340.4315716,"samples":8},{"name":"Using + - small number (2 len)","opsSec":599057031.2625668,"samples":7},{"name":"Using + - big number (10 len)","opsSec":598966163.9727032,"samples":7}]}-->
