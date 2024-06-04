## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,983,273|7991637|
|Using parseInt(x, 10) - big number (10 len)|15,923,322|7961662|
|Using + - small number (2 len)|16,048,700|8024351|
|Using + - big number (10 len)|16,092,897|8046449|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:26:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15983273.104955038,"samples":7991637},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15923322.31214806,"samples":7961662},{"name":"Using + - small number (2 len)","opsSec":16048700.684026591,"samples":8024351},{"name":"Using + - big number (10 len)","opsSec":16092897.581610221,"samples":8046449}]}-->
