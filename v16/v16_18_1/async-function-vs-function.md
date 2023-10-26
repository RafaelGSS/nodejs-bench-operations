## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|709,771,600|96|
|[async] - function|87,356,077|89|
|[async] - await function|629,715|17|
|[async] - await async function|171,693|22|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":709771600.1531788,"samples":7},{"name":"[async] - function","opsSec":87356077.08438015,"samples":7},{"name":"[async] - await function","opsSec":629714.8998330891,"samples":3},{"name":"[async] - await async function","opsSec":171692.93354542388,"samples":3}]}-->
