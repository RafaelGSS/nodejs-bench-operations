## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,921|86|
|new Blob (1024)|610|81|
|text (128)|5,018|84|
|text (1024)|636|88|
|arrayBuffer (128)|5,032|85|
|arrayBuffer (1024)|633|87|
|slice (0, 64)|165,197|53|
|slice (0, 512)|35,966|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:34:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4921.328819947006,"samples":5},{"name":"new Blob (1024)","opsSec":610.4905398412723,"samples":2},{"name":"text (128)","opsSec":5018.245493580835,"samples":5},{"name":"text (1024)","opsSec":635.9508001832664,"samples":2},{"name":"arrayBuffer (128)","opsSec":5032.493351372228,"samples":3},{"name":"arrayBuffer (1024)","opsSec":632.6872430206365,"samples":2},{"name":"slice (0, 64)","opsSec":165197.22147039635,"samples":3},{"name":"slice (0, 512)","opsSec":35966.429593942405,"samples":5}]}-->
