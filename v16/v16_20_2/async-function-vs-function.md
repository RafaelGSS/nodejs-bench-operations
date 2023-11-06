## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,185,409|99|
|[async] async function|16,657,280|86|
|[async] function|337,405|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:13:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846185409.200881,"samples":7},{"name":"[async] async function","opsSec":16657280.297477318,"samples":5},{"name":"[async] function","opsSec":337405.22601588536,"samples":3}]}-->
