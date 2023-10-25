## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,863|83|
|new Blob (1024)|369|69|
|text (128)|24,020|76|
|text (1024)|11,829|78|
|arrayBuffer (128)|25,747|77|
|arrayBuffer (1024)|14,151|82|
|slice (0, 64)|44,259|77|
|slice (0, 512)|22,139|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2862.5289942667364,"samples":5},{"name":"new Blob (1024)","opsSec":368.88264631508935,"samples":2},{"name":"text (128)","opsSec":24019.593565031606,"samples":6},{"name":"text (1024)","opsSec":11829.27200230327,"samples":3},{"name":"arrayBuffer (128)","opsSec":25747.024652297587,"samples":5},{"name":"arrayBuffer (1024)","opsSec":14150.609880837434,"samples":4},{"name":"slice (0, 64)","opsSec":44258.61283461409,"samples":5},{"name":"slice (0, 512)","opsSec":22138.690394847697,"samples":3}]}-->
