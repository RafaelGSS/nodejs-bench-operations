## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,118,999|8059500|
|Using parseInt(x, 10) - big number (10 len)|16,161,875|8080938|
|Using + - small number (2 len)|16,170,290|8085146|
|Using + - big number (10 len)|16,043,871|8021936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:24:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16118999.322996523,"samples":8059500},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16161875.450463885,"samples":8080938},{"name":"Using + - small number (2 len)","opsSec":16170290.188926004,"samples":8085146},{"name":"Using + - big number (10 len)","opsSec":16043871.550831446,"samples":8021936}]}-->
