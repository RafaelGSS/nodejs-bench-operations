## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,897|87|
|new Blob (1024)|610|76|
|text (128)|5,612|88|
|text (1024)|705|90|
|arrayBuffer (128)|5,548|86|
|arrayBuffer (1024)|688|87|
|slice (0, 64)|152,467|52|
|slice (0, 512)|35,916|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:33:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4896.969465329006,"samples":3},{"name":"new Blob (1024)","opsSec":609.9968620418482,"samples":2},{"name":"text (128)","opsSec":5611.766670783203,"samples":4},{"name":"text (1024)","opsSec":704.8402516965219,"samples":3},{"name":"arrayBuffer (128)","opsSec":5548.327767332359,"samples":3},{"name":"arrayBuffer (1024)","opsSec":688.4909852999234,"samples":3},{"name":"slice (0, 64)","opsSec":152467.10471663123,"samples":3},{"name":"slice (0, 512)","opsSec":35915.64439442849,"samples":5}]}-->
