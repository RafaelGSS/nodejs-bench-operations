## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,152|88|
|new Blob (1024)|388|67|
|text (128)|31,614|66|
|text (1024)|20,728|84|
|arrayBuffer (128)|31,523|83|
|arrayBuffer (1024)|21,496|88|
|slice (0, 64)|55,396|75|
|slice (0, 512)|31,508|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3152.030460852718,"samples":4},{"name":"new Blob (1024)","opsSec":387.9989221577653,"samples":2},{"name":"text (128)","opsSec":31613.559854198076,"samples":3},{"name":"text (1024)","opsSec":20728.21561537973,"samples":3},{"name":"arrayBuffer (128)","opsSec":31523.268430217275,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21496.2188337662,"samples":3},{"name":"slice (0, 64)","opsSec":55396.13545230414,"samples":4},{"name":"slice (0, 512)","opsSec":31507.704233406846,"samples":3}]}-->
