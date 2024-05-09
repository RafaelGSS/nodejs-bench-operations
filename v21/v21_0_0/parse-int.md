## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,531,374|8265688|
|Using parseInt(x, 10) - big number (10 len)|16,530,874|8265438|
|Using + - small number (2 len)|16,546,447|8273224|
|Using + - big number (10 len)|16,577,468|8288735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16531374.060837736,"samples":8265688},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16530874.589026188,"samples":8265438},{"name":"Using + - small number (2 len)","opsSec":16546447.368803125,"samples":8273224},{"name":"Using + - big number (10 len)","opsSec":16577468.063335575,"samples":8288735}]}-->
