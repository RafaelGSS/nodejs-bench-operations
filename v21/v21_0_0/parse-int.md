## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|850,351,121|95|
|Using parseInt(x, 10) - big number (10 len)|850,887,674|97|
|Using + - small number (2 len)|844,736,554|99|
|Using + - big number (10 len)|844,436,931|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":850351120.9937941,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":850887673.9039176,"samples":5},{"name":"Using + - small number (2 len)","opsSec":844736553.961048,"samples":6},{"name":"Using + - big number (10 len)","opsSec":844436931.0430553,"samples":8}]}-->
