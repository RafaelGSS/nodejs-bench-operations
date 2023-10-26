## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|718,530,411|87|
|[async] - function|97,666,418|89|
|[async] - await function|687,562|31|
|[async] - await async function|193,470|10|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":718530410.8747468,"samples":6},{"name":"[async] - function","opsSec":97666417.98472291,"samples":7},{"name":"[async] - await function","opsSec":687562.4209926216,"samples":3},{"name":"[async] - await async function","opsSec":193470.01800883308,"samples":4}]}-->
