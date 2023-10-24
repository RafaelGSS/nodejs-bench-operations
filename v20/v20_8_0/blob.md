## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,236|89|
|new Blob (1024)|410|70|
|text (128)|3,593|86|
|text (1024)|452|87|
|arrayBuffer (128)|3,614|88|
|arrayBuffer (1024)|449|87|
|slice (0, 64)|50,826|68|
|slice (0, 512)|15,815|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3235.868941949478,"samples":3},{"name":"new Blob (1024)","opsSec":410.4229725789226,"samples":2},{"name":"text (128)","opsSec":3592.6132006078933,"samples":4},{"name":"text (1024)","opsSec":451.67473799148297,"samples":3},{"name":"arrayBuffer (128)","opsSec":3613.5329898570335,"samples":3},{"name":"arrayBuffer (1024)","opsSec":449.314968008656,"samples":2},{"name":"slice (0, 64)","opsSec":50825.57139465757,"samples":4},{"name":"slice (0, 512)","opsSec":15815.091813369916,"samples":3}]}-->
