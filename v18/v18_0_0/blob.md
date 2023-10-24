## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,416|82|
|new Blob (1024)|459|67|
|text (128)|22,973|79|
|text (1024)|7,283|75|
|arrayBuffer (128)|27,032|81|
|arrayBuffer (1024)|8,394|84|
|slice (0, 64)|44,844|75|
|slice (0, 512)|12,499|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3415.6080947284972,"samples":3},{"name":"new Blob (1024)","opsSec":458.7084361580161,"samples":2},{"name":"text (128)","opsSec":22972.739215914564,"samples":4},{"name":"text (1024)","opsSec":7283.365465726515,"samples":4},{"name":"arrayBuffer (128)","opsSec":27032.219465935486,"samples":4},{"name":"arrayBuffer (1024)","opsSec":8394.302490946426,"samples":5},{"name":"slice (0, 64)","opsSec":44843.68988662642,"samples":3},{"name":"slice (0, 512)","opsSec":12499.250639698172,"samples":3}]}-->
