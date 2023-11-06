## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|844,851,586|99|
|[async] async function|17,601,921|88|
|[async] function|273,450|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:14:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":844851586.35272,"samples":6},{"name":"[async] async function","opsSec":17601920.824921153,"samples":8},{"name":"[async] function","opsSec":273449.51053432486,"samples":3}]}-->
