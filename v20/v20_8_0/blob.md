## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,472|84|
|new Blob (1024)|572|74|
|text (128)|4,780|84|
|text (1024)|602|88|
|arrayBuffer (128)|4,800|85|
|arrayBuffer (1024)|600|88|
|slice (0, 64)|67,509|69|
|slice (0, 512)|22,636|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:31:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4471.904029172169,"samples":3},{"name":"new Blob (1024)","opsSec":571.9311408715179,"samples":2},{"name":"text (128)","opsSec":4779.626883056961,"samples":5},{"name":"text (1024)","opsSec":601.6007218423581,"samples":3},{"name":"arrayBuffer (128)","opsSec":4800.047477246732,"samples":4},{"name":"arrayBuffer (1024)","opsSec":600.0230885497245,"samples":2},{"name":"slice (0, 64)","opsSec":67508.64076009643,"samples":3},{"name":"slice (0, 512)","opsSec":22636.39914219861,"samples":3}]}-->
