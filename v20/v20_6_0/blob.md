## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,419|84|
|new Blob (1024)|585|75|
|text (128)|5,559|88|
|text (1024)|697|89|
|arrayBuffer (128)|5,533|87|
|arrayBuffer (1024)|624|87|
|slice (0, 64)|71,020|72|
|slice (0, 512)|18,645|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4419.269917404159,"samples":3},{"name":"new Blob (1024)","opsSec":584.6887978671444,"samples":2},{"name":"text (128)","opsSec":5558.5959319675985,"samples":5},{"name":"text (1024)","opsSec":697.3334507296955,"samples":3},{"name":"arrayBuffer (128)","opsSec":5533.243904802605,"samples":3},{"name":"arrayBuffer (1024)","opsSec":624.3409560261427,"samples":3},{"name":"slice (0, 64)","opsSec":71020.32678140435,"samples":3},{"name":"slice (0, 512)","opsSec":18645.12938367271,"samples":4}]}-->
