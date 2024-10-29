## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|128,591,382|64295833|
|Using parseInt(x, 10) - big number (10 len)|99,837,666|49918845|
|Using + - small number (2 len)|96,196,219|48098142|
|Using + - big number (10 len)|97,595,106|48801343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:32:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":128591382.32741058,"samples":64295833},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99837666.23863544,"samples":49918845},{"name":"Using + - small number (2 len)","opsSec":96196219.74092521,"samples":48098142},{"name":"Using + - big number (10 len)","opsSec":97595106.7640087,"samples":48801343}]}-->
