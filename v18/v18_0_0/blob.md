## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,349|88|
|new Blob (1024)|695|80|
|text (128)|28,746|75|
|text (1024)|14,331|82|
|arrayBuffer (128)|33,412|80|
|arrayBuffer (1024)|16,221|85|
|slice (0, 64)|87,531|79|
|slice (0, 512)|26,146|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"new Blob (128)","opsSec":5348.593251162544,"samples":4},{"name":"new Blob (1024)","opsSec":695.2202963166253,"samples":2},{"name":"text (128)","opsSec":28746.265941190362,"samples":4},{"name":"text (1024)","opsSec":14331.377798421336,"samples":5},{"name":"arrayBuffer (128)","opsSec":33412.35158936201,"samples":3},{"name":"arrayBuffer (1024)","opsSec":16221.418647516442,"samples":5},{"name":"slice (0, 64)","opsSec":87531.18616036366,"samples":3},{"name":"slice (0, 512)","opsSec":26146.333656284096,"samples":4}]}-->
