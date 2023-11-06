## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|850,653,433|96|
|[async] async function|17,553,069|84|
|[async] function|191,337|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":850653433.2553879,"samples":6},{"name":"[async] async function","opsSec":17553069.319405016,"samples":6},{"name":"[async] function","opsSec":191337.31318841036,"samples":3}]}-->
