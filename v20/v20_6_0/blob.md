## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,413|82|
|new Blob (1024)|545|71|
|text (128)|5,089|83|
|text (1024)|668|87|
|arrayBuffer (128)|5,357|86|
|arrayBuffer (1024)|681|89|
|slice (0, 64)|67,604|71|
|slice (0, 512)|19,445|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:29:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4413.193876808367,"samples":6},{"name":"new Blob (1024)","opsSec":544.6383067046266,"samples":2},{"name":"text (128)","opsSec":5088.603339795935,"samples":5},{"name":"text (1024)","opsSec":667.6898159498797,"samples":3},{"name":"arrayBuffer (128)","opsSec":5357.020390889295,"samples":3},{"name":"arrayBuffer (1024)","opsSec":681.2862623744352,"samples":3},{"name":"slice (0, 64)","opsSec":67604.4788716625,"samples":3},{"name":"slice (0, 512)","opsSec":19444.690473756007,"samples":3}]}-->
