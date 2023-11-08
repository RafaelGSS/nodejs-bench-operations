## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|850,647,827|95|
|[async] async function|17,497,258|87|
|[async] function|170,577|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:20:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":850647826.5599637,"samples":7},{"name":"[async] async function","opsSec":17497257.883541916,"samples":7},{"name":"[async] function","opsSec":170577.4340180514,"samples":3}]}-->
