## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|159,784,177|98|
|Using parseInt(x, 10) - big number (10 len)|14,311,025|99|
|Using + - small number (2 len)|717,098,271|97|
|Using + - big number (10 len)|716,019,761|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":159784176.7108131,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14311024.953802537,"samples":6},{"name":"Using + - small number (2 len)","opsSec":717098270.7461947,"samples":12},{"name":"Using + - big number (10 len)","opsSec":716019760.9232726,"samples":8}]}-->
