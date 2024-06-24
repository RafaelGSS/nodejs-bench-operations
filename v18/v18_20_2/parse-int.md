## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,566,918|8283460|
|Using parseInt(x, 10) - big number (10 len)|8,978,011|4489006|
|Using + - small number (2 len)|16,894,930|8447466|
|Using + - big number (10 len)|17,071,826|8535914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:07:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16566918.176305931,"samples":8283460},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8978011.13001051,"samples":4489006},{"name":"Using + - small number (2 len)","opsSec":16894930.52276998,"samples":8447466},{"name":"Using + - big number (10 len)","opsSec":17071826.49541012,"samples":8535914}]}-->
