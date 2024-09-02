## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,551|1776|
|new Blob (1024)|625|313|
|text (128)|4,183|2092|
|text (1024)|546|275|
|arrayBuffer (128)|4,298|2150|
|arrayBuffer (1024)|550|276|
|slice (0, 64)|150,157|75079|
|slice (0, 512)|37,864|18933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:41:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":3551.0966791286673,"samples":1776},{"name":"new Blob (1024)","opsSec":625.0034956764838,"samples":313},{"name":"text (128)","opsSec":4183.962587006515,"samples":2092},{"name":"text (1024)","opsSec":546.539834446543,"samples":275},{"name":"arrayBuffer (128)","opsSec":4298.276322421992,"samples":2150},{"name":"arrayBuffer (1024)","opsSec":550.745596495118,"samples":276},{"name":"slice (0, 64)","opsSec":150157.35672588673,"samples":75079},{"name":"slice (0, 512)","opsSec":37864.846939684474,"samples":18933}]}-->
