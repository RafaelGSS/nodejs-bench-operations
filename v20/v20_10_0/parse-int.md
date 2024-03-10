## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|843,227,258|96|
|Using parseInt(x, 10) - big number (10 len)|840,737,998|97|
|Using + - small number (2 len)|846,081,625|98|
|Using + - big number (10 len)|842,623,487|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":843227257.8890486,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":840737997.5587025,"samples":7},{"name":"Using + - small number (2 len)","opsSec":846081625.0518603,"samples":7},{"name":"Using + - big number (10 len)","opsSec":842623486.8353435,"samples":6}]}-->
