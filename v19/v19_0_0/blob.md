## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,817|89|
|new Blob (1024)|361|70|
|text (128)|23,289|77|
|text (1024)|12,739|81|
|arrayBuffer (128)|24,854|75|
|arrayBuffer (1024)|14,682|77|
|slice (0, 64)|41,964|75|
|slice (0, 512)|18,263|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2816.982413525467,"samples":5},{"name":"new Blob (1024)","opsSec":361.4161786911569,"samples":2},{"name":"text (128)","opsSec":23288.86678087723,"samples":4},{"name":"text (1024)","opsSec":12738.9118908672,"samples":3},{"name":"arrayBuffer (128)","opsSec":24854.331838209157,"samples":5},{"name":"arrayBuffer (1024)","opsSec":14682.30950474123,"samples":3},{"name":"slice (0, 64)","opsSec":41963.85441541099,"samples":3},{"name":"slice (0, 512)","opsSec":18262.661234378327,"samples":4}]}-->
