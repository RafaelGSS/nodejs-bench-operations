## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|240,663,733|98|
|Using parseInt(x, 10) - big number (10 len)|18,400,191|96|
|Using + - small number (2 len)|822,070,127|96|
|Using + - big number (10 len)|822,033,332|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":240663732.74937552,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18400190.99112138,"samples":5},{"name":"Using + - small number (2 len)","opsSec":822070127.4839553,"samples":8},{"name":"Using + - big number (10 len)","opsSec":822033332.0394558,"samples":7}]}-->
