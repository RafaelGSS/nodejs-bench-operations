## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,541|85|
|new Blob (1024)|585|78|
|text (128)|4,854|83|
|text (1024)|614|86|
|arrayBuffer (128)|4,784|83|
|arrayBuffer (1024)|620|86|
|slice (0, 64)|67,190|69|
|slice (0, 512)|19,638|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:21:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4540.960933720154,"samples":4},{"name":"new Blob (1024)","opsSec":585.012090544943,"samples":2},{"name":"text (128)","opsSec":4854.014119562184,"samples":5},{"name":"text (1024)","opsSec":614.455238321437,"samples":3},{"name":"arrayBuffer (128)","opsSec":4783.945986740943,"samples":3},{"name":"arrayBuffer (1024)","opsSec":620.2983467426109,"samples":2},{"name":"slice (0, 64)","opsSec":67190.2901746658,"samples":3},{"name":"slice (0, 512)","opsSec":19637.781751977887,"samples":3}]}-->
