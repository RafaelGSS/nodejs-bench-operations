## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2284|
|new Blob (1024)|625|315|
|text (128)|3,738|1871|
|text (1024)|536|275|
|arrayBuffer (128)|4,329|2179|
|arrayBuffer (1024)|537|269|
|slice (0, 64)|146,774|77711|
|slice (0, 512)|31,704|15853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4567.2908184854505,"samples":2284},{"name":"new Blob (1024)","opsSec":625.721714129238,"samples":315},{"name":"text (128)","opsSec":3738.440234777803,"samples":1871},{"name":"text (1024)","opsSec":536.4502379639611,"samples":275},{"name":"arrayBuffer (128)","opsSec":4329.035411084507,"samples":2179},{"name":"arrayBuffer (1024)","opsSec":537.3876929392374,"samples":269},{"name":"slice (0, 64)","opsSec":146774.1617905084,"samples":77711},{"name":"slice (0, 512)","opsSec":31704.75451042381,"samples":15853}]}-->
