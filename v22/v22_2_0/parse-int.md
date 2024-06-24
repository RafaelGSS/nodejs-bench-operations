## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,042,692|8021347|
|Using parseInt(x, 10) - big number (10 len)|16,138,480|8069241|
|Using + - small number (2 len)|16,270,863|8135432|
|Using + - big number (10 len)|16,038,759|8019380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:12:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16042692.267391277,"samples":8021347},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16138480.386167003,"samples":8069241},{"name":"Using + - small number (2 len)","opsSec":16270863.804742051,"samples":8135432},{"name":"Using + - big number (10 len)","opsSec":16038759.422587894,"samples":8019380}]}-->
