## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|850,896,322|97|
|[async] async function|16,496,100|87|
|[async] function|174,420|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:16:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":850896321.6271836,"samples":6},{"name":"[async] async function","opsSec":16496100.290324237,"samples":8},{"name":"[async] function","opsSec":174420.32095823926,"samples":3}]}-->
