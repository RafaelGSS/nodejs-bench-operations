## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,163,376|7081689|
|Using parseInt(x, 10) - big number (10 len)|15,346,143|7673072|
|Using + - small number (2 len)|15,494,957|7747480|
|Using + - big number (10 len)|15,532,523|7766262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:20:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14163376.088724406,"samples":7081689},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15346143.465814363,"samples":7673072},{"name":"Using + - small number (2 len)","opsSec":15494957.857314216,"samples":7747480},{"name":"Using + - big number (10 len)","opsSec":15532523.200099705,"samples":7766262}]}-->
