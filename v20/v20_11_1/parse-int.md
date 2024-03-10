## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|848,420,733|97|
|Using parseInt(x, 10) - big number (10 len)|844,597,256|97|
|Using + - small number (2 len)|847,979,629|98|
|Using + - big number (10 len)|848,027,497|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":848420733.1536328,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":844597256.112662,"samples":7},{"name":"Using + - small number (2 len)","opsSec":847979629.0168072,"samples":7},{"name":"Using + - big number (10 len)","opsSec":848027496.832957,"samples":7}]}-->
