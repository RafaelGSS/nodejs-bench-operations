## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,338,623|96|
|[async] async function|17,366,758|90|
|[async] function|351,783|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:15:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":845338623.0454707,"samples":6},{"name":"[async] async function","opsSec":17366757.867480263,"samples":7},{"name":"[async] function","opsSec":351783.0918022088,"samples":3}]}-->
