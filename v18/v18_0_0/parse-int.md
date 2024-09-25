## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,734,046|8367024|
|Using parseInt(x, 10) - big number (10 len)|8,910,034|4455018|
|Using + - small number (2 len)|17,045,148|8522575|
|Using + - big number (10 len)|17,826,736|8913369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:21:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16734046.554666083,"samples":8367024},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8910034.54573852,"samples":4455018},{"name":"Using + - small number (2 len)","opsSec":17045148.73270438,"samples":8522575},{"name":"Using + - big number (10 len)","opsSec":17826736.71563506,"samples":8913369}]}-->
