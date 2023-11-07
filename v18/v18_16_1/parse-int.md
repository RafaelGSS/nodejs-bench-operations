## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,542,086|95|
|Using parseInt(x, 10) - big number (10 len)|21,150,095|94|
|Using + - small number (2 len)|848,792,756|99|
|Using + - big number (10 len)|846,697,353|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":283542086.03282017,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21150094.54302049,"samples":6},{"name":"Using + - small number (2 len)","opsSec":848792756.4269848,"samples":8},{"name":"Using + - big number (10 len)","opsSec":846697352.5361819,"samples":7}]}-->
