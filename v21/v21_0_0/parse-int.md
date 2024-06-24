## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,719,860|8359931|
|Using parseInt(x, 10) - big number (10 len)|16,745,319|8372660|
|Using + - small number (2 len)|16,699,250|8349626|
|Using + - big number (10 len)|16,739,594|8369798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16719860.981867554,"samples":8359931},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16745319.996880941,"samples":8372660},{"name":"Using + - small number (2 len)","opsSec":16699250.703024058,"samples":8349626},{"name":"Using + - big number (10 len)","opsSec":16739594.174945515,"samples":8369798}]}-->
