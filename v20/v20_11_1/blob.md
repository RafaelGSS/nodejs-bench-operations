## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,230|89|
|new Blob (1024)|664|76|
|text (128)|5,727|85|
|text (1024)|735|88|
|arrayBuffer (128)|5,832|88|
|arrayBuffer (1024)|718|86|
|slice (0, 64)|74,260|72|
|slice (0, 512)|20,784|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5230.404695873954,"samples":5},{"name":"new Blob (1024)","opsSec":664.0996036826341,"samples":2},{"name":"text (128)","opsSec":5727.4667541725175,"samples":6},{"name":"text (1024)","opsSec":734.5118837809699,"samples":3},{"name":"arrayBuffer (128)","opsSec":5832.284951875313,"samples":3},{"name":"arrayBuffer (1024)","opsSec":717.9712122284149,"samples":3},{"name":"slice (0, 64)","opsSec":74260.06412443666,"samples":4},{"name":"slice (0, 512)","opsSec":20784.316908195964,"samples":4}]}-->
