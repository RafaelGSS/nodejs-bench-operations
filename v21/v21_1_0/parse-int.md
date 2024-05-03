## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|913,073,176|100|
|Using parseInt(x, 10) - big number (10 len)|913,775,170|97|
|Using + - small number (2 len)|913,419,250|97|
|Using + - big number (10 len)|912,888,955|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:56:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":913073176.2157964,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":913775170.3236157,"samples":7},{"name":"Using + - small number (2 len)","opsSec":913419249.9032608,"samples":6},{"name":"Using + - big number (10 len)","opsSec":912888955.0022565,"samples":6}]}-->
