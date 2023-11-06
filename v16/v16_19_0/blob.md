## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,380|83|
|new Blob (1024)|556|73|
|text (128)|40,723|85|
|text (1024)|26,042|72|
|arrayBuffer (128)|50,673|85|
|arrayBuffer (1024)|30,145|71|
|slice (0, 64)|88,720|79|
|slice (0, 512)|45,075|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:20:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4380.250352935759,"samples":3},{"name":"new Blob (1024)","opsSec":555.8047846678493,"samples":2},{"name":"text (128)","opsSec":40723.27285400267,"samples":4},{"name":"text (1024)","opsSec":26042.085884365824,"samples":4},{"name":"arrayBuffer (128)","opsSec":50673.158182317595,"samples":4},{"name":"arrayBuffer (1024)","opsSec":30144.618345180505,"samples":4},{"name":"slice (0, 64)","opsSec":88719.94394699612,"samples":3},{"name":"slice (0, 512)","opsSec":45074.76460710991,"samples":3}]}-->
