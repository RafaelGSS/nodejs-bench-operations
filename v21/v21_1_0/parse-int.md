## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,943,347|99|
|Using parseInt(x, 10) - big number (10 len)|823,613,617|99|
|Using + - small number (2 len)|821,196,932|94|
|Using + - big number (10 len)|823,924,162|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822943346.7172403,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823613616.8819836,"samples":7},{"name":"Using + - small number (2 len)","opsSec":821196931.8782394,"samples":6},{"name":"Using + - big number (10 len)","opsSec":823924162.1681443,"samples":7}]}-->
