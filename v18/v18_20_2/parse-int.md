## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,773,711|8386856|
|Using parseInt(x, 10) - big number (10 len)|8,717,140|4358571|
|Using + - small number (2 len)|16,441,288|8220645|
|Using + - big number (10 len)|16,420,978|8210490|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:18:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16773711.808040103,"samples":8386856},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8717140.952522507,"samples":4358571},{"name":"Using + - small number (2 len)","opsSec":16441288.228201322,"samples":8220645},{"name":"Using + - big number (10 len)","opsSec":16420978.700197952,"samples":8210490}]}-->
