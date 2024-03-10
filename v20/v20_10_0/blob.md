## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,245|88|
|new Blob (1024)|674|77|
|text (128)|5,952|88|
|text (1024)|727|89|
|arrayBuffer (128)|5,963|87|
|arrayBuffer (1024)|746|90|
|slice (0, 64)|77,220|71|
|slice (0, 512)|21,169|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5245.283835556108,"samples":4},{"name":"new Blob (1024)","opsSec":673.8063759055207,"samples":2},{"name":"text (128)","opsSec":5951.665174473568,"samples":6},{"name":"text (1024)","opsSec":727.2031378301923,"samples":3},{"name":"arrayBuffer (128)","opsSec":5962.787522667537,"samples":3},{"name":"arrayBuffer (1024)","opsSec":746.4617557265697,"samples":3},{"name":"slice (0, 64)","opsSec":77219.99371940555,"samples":3},{"name":"slice (0, 512)","opsSec":21169.36390114864,"samples":4}]}-->
