## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|139,517,511|69864619|
|Using parseInt(x, 10) - big number (10 len)|87,767,262|43910353|
|Using + - small number (2 len)|98,111,356|49068657|
|Using + - big number (10 len)|98,841,639|49420827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":139517511.2475611,"samples":69864619},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":87767262.40750577,"samples":43910353},{"name":"Using + - small number (2 len)","opsSec":98111356.28602198,"samples":49068657},{"name":"Using + - big number (10 len)","opsSec":98841639.37143737,"samples":49420827}]}-->
