## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|128,636,674|64321147|
|Using parseInt(x, 10) - big number (10 len)|16,923,584|8461795|
|Using + - small number (2 len)|93,405,788|46708164|
|Using + - big number (10 len)|89,709,247|44854631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:35:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":128636674.63550523,"samples":64321147},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16923584.99061884,"samples":8461795},{"name":"Using + - small number (2 len)","opsSec":93405788.09087184,"samples":46708164},{"name":"Using + - big number (10 len)","opsSec":89709247.10826498,"samples":44854631}]}-->
