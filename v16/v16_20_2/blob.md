## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,535|84|
|new Blob (1024)|570|75|
|text (128)|43,063|84|
|text (1024)|26,628|77|
|arrayBuffer (128)|50,512|88|
|arrayBuffer (1024)|31,619|75|
|slice (0, 64)|93,278|80|
|slice (0, 512)|46,250|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:23:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4534.679272429428,"samples":4},{"name":"new Blob (1024)","opsSec":570.4805302408276,"samples":2},{"name":"text (128)","opsSec":43062.915729379354,"samples":4},{"name":"text (1024)","opsSec":26628.414028354673,"samples":5},{"name":"arrayBuffer (128)","opsSec":50512.35427616338,"samples":3},{"name":"arrayBuffer (1024)","opsSec":31619.42567457766,"samples":4},{"name":"slice (0, 64)","opsSec":93278.46746516282,"samples":3},{"name":"slice (0, 512)","opsSec":46250.499639536334,"samples":4}]}-->
