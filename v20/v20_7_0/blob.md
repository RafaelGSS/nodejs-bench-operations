## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,443|82|
|new Blob (1024)|566|75|
|text (128)|4,779|86|
|text (1024)|601|88|
|arrayBuffer (128)|4,771|85|
|arrayBuffer (1024)|600|88|
|slice (0, 64)|68,385|70|
|slice (0, 512)|19,048|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:30:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4443.402471554451,"samples":3},{"name":"new Blob (1024)","opsSec":566.3382690161251,"samples":2},{"name":"text (128)","opsSec":4778.581019944253,"samples":5},{"name":"text (1024)","opsSec":601.367880528599,"samples":3},{"name":"arrayBuffer (128)","opsSec":4771.238803854362,"samples":3},{"name":"arrayBuffer (1024)","opsSec":599.7118617063221,"samples":2},{"name":"slice (0, 64)","opsSec":68385.33411772054,"samples":3},{"name":"slice (0, 512)","opsSec":19047.859582455156,"samples":4}]}-->
