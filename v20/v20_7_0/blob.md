## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,127|83|
|new Blob (1024)|419|66|
|text (128)|3,392|84|
|text (1024)|431|82|
|arrayBuffer (128)|3,416|79|
|arrayBuffer (1024)|444|85|
|slice (0, 64)|38,789|64|
|slice (0, 512)|11,089|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3126.569426384419,"samples":3},{"name":"new Blob (1024)","opsSec":418.553671008715,"samples":2},{"name":"text (128)","opsSec":3391.945146817779,"samples":4},{"name":"text (1024)","opsSec":430.8956086148587,"samples":2},{"name":"arrayBuffer (128)","opsSec":3415.7801902772294,"samples":4},{"name":"arrayBuffer (1024)","opsSec":444.3779744063955,"samples":2},{"name":"slice (0, 64)","opsSec":38789.324765544654,"samples":4},{"name":"slice (0, 512)","opsSec":11089.301745628087,"samples":6}]}-->
