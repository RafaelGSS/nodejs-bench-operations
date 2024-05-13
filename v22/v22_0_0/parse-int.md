## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,058,869|8029435|
|Using parseInt(x, 10) - big number (10 len)|16,004,278|8002140|
|Using + - small number (2 len)|16,118,322|8059162|
|Using + - big number (10 len)|16,069,267|8034634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16058869.646708084,"samples":8029435},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16004278.911692072,"samples":8002140},{"name":"Using + - small number (2 len)","opsSec":16118322.130239518,"samples":8059162},{"name":"Using + - big number (10 len)","opsSec":16069267.935711566,"samples":8034634}]}-->
