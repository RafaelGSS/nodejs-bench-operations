## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,537|83|
|new Blob (1024)|578|75|
|text (128)|49,494|87|
|text (1024)|30,918|77|
|arrayBuffer (128)|50,307|88|
|arrayBuffer (1024)|31,312|75|
|slice (0, 64)|90,140|81|
|slice (0, 512)|55,815|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:26:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4536.983031419724,"samples":3},{"name":"new Blob (1024)","opsSec":577.8260344981634,"samples":3},{"name":"text (128)","opsSec":49494.1823605912,"samples":5},{"name":"text (1024)","opsSec":30918.00291715253,"samples":4},{"name":"arrayBuffer (128)","opsSec":50307.130108511556,"samples":3},{"name":"arrayBuffer (1024)","opsSec":31311.930511298997,"samples":3},{"name":"slice (0, 64)","opsSec":90140.09206636871,"samples":3},{"name":"slice (0, 512)","opsSec":55815.10065678303,"samples":3}]}-->
