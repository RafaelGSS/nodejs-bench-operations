## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,206,832|96|
|Using parseInt(x, 10) - big number (10 len)|823,518,143|99|
|Using + - small number (2 len)|823,922,777|99|
|Using + - big number (10 len)|823,514,752|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822206832.310753,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823518142.5262095,"samples":6},{"name":"Using + - small number (2 len)","opsSec":823922776.6009359,"samples":7},{"name":"Using + - big number (10 len)","opsSec":823514752.2593809,"samples":7}]}-->
