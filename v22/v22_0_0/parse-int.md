## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,173,232|8086617|
|Using parseInt(x, 10) - big number (10 len)|16,195,834|8097918|
|Using + - small number (2 len)|16,268,693|8134347|
|Using + - big number (10 len)|16,215,300|8107651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:11:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16173232.479746133,"samples":8086617},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16195834.380403198,"samples":8097918},{"name":"Using + - small number (2 len)","opsSec":16268693.511888603,"samples":8134347},{"name":"Using + - big number (10 len)","opsSec":16215300.41092126,"samples":8107651}]}-->
