## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,772,945|98|
|Using parseInt(x, 10) - big number (10 len)|823,641,441|95|
|Using + - small number (2 len)|823,505,697|94|
|Using + - big number (10 len)|823,491,820|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822772944.6580621,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823641440.957767,"samples":8},{"name":"Using + - small number (2 len)","opsSec":823505697.080757,"samples":7},{"name":"Using + - big number (10 len)","opsSec":823491819.6718252,"samples":7}]}-->
