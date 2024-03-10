## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,539|91|
|new Blob (1024)|696|75|
|text (128)|5,929|87|
|text (1024)|751|88|
|arrayBuffer (128)|5,985|88|
|arrayBuffer (1024)|748|88|
|slice (0, 64)|183,786|58|
|slice (0, 512)|41,709|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5538.722723302259,"samples":3},{"name":"new Blob (1024)","opsSec":695.8910595161203,"samples":2},{"name":"text (128)","opsSec":5928.89001285375,"samples":4},{"name":"text (1024)","opsSec":751.0373882616789,"samples":3},{"name":"arrayBuffer (128)","opsSec":5985.2792481333545,"samples":4},{"name":"arrayBuffer (1024)","opsSec":747.9412436662649,"samples":2},{"name":"slice (0, 64)","opsSec":183785.81280080345,"samples":3},{"name":"slice (0, 512)","opsSec":41709.01842747698,"samples":4}]}-->
