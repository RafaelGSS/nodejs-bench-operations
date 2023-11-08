## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|851,012,869|98|
|Using parseInt(x, 10) - big number (10 len)|851,531,280|95|
|Using + - small number (2 len)|852,157,458|96|
|Using + - big number (10 len)|851,373,196|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:39:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":851012869.046212,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":851531280.1261065,"samples":6},{"name":"Using + - small number (2 len)","opsSec":852157458.1081713,"samples":6},{"name":"Using + - big number (10 len)","opsSec":851373196.4850823,"samples":7}]}-->
