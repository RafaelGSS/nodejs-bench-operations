## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,675|86|
|new Blob (1024)|575|70|
|text (128)|23,513|66|
|text (1024)|7,949|85|
|arrayBuffer (128)|24,579|83|
|arrayBuffer (1024)|8,807|83|
|slice (0, 64)|121,995|78|
|slice (0, 512)|22,429|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":4675.305176966804,"samples":4},{"name":"new Blob (1024)","opsSec":574.8932646633065,"samples":2},{"name":"text (128)","opsSec":23513.060108484457,"samples":4},{"name":"text (1024)","opsSec":7949.230290199846,"samples":4},{"name":"arrayBuffer (128)","opsSec":24578.702562179496,"samples":5},{"name":"arrayBuffer (1024)","opsSec":8806.835008697853,"samples":3},{"name":"slice (0, 64)","opsSec":121995.01519379718,"samples":4},{"name":"slice (0, 512)","opsSec":22429.474729447877,"samples":3}]}-->
