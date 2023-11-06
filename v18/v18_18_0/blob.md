## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,512|85|
|new Blob (1024)|583|77|
|text (128)|49,548|91|
|text (1024)|32,199|80|
|arrayBuffer (128)|50,060|87|
|arrayBuffer (1024)|32,658|77|
|slice (0, 64)|90,128|83|
|slice (0, 512)|56,530|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:27:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4512.0344327527655,"samples":4},{"name":"new Blob (1024)","opsSec":582.918346835998,"samples":2},{"name":"text (128)","opsSec":49547.88566164959,"samples":4},{"name":"text (1024)","opsSec":32198.96416329293,"samples":3},{"name":"arrayBuffer (128)","opsSec":50060.24164356149,"samples":3},{"name":"arrayBuffer (1024)","opsSec":32657.765502333714,"samples":4},{"name":"slice (0, 64)","opsSec":90127.60359269318,"samples":4},{"name":"slice (0, 512)","opsSec":56529.941679304735,"samples":3}]}-->
