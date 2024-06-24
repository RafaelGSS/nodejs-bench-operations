## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,185,097|8092549|
|Using parseInt(x, 10) - big number (10 len)|16,114,578|8057290|
|Using + - small number (2 len)|16,173,138|8086570|
|Using + - big number (10 len)|16,111,096|8055549|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:09:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16185097.308636717,"samples":8092549},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16114578.897942008,"samples":8057290},{"name":"Using + - small number (2 len)","opsSec":16173138.75485088,"samples":8086570},{"name":"Using + - big number (10 len)","opsSec":16111096.351321513,"samples":8055549}]}-->
