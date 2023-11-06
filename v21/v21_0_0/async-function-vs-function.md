## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|842,216,806|96|
|[async] async function|17,410,315|88|
|[async] function|183,853|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":842216806.3348161,"samples":6},{"name":"[async] async function","opsSec":17410315.370980665,"samples":6},{"name":"[async] function","opsSec":183852.60939712482,"samples":3}]}-->
