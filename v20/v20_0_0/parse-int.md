## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|825,105,012|97|
|Using parseInt(x, 10) - big number (10 len)|824,558,206|95|
|Using + - small number (2 len)|825,950,711|98|
|Using + - big number (10 len)|825,472,342|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":825105011.8738407,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":824558206.314111,"samples":7},{"name":"Using + - small number (2 len)","opsSec":825950711.1944588,"samples":7},{"name":"Using + - big number (10 len)","opsSec":825472341.6512837,"samples":6}]}-->
