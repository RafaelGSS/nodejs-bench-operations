## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,244|85|
|new Blob (1024)|412|68|
|text (128)|25,962|76|
|text (1024)|15,182|83|
|arrayBuffer (128)|31,679|86|
|arrayBuffer (1024)|18,255|82|
|slice (0, 64)|64,060|75|
|slice (0, 512)|31,705|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3244.2850093031743,"samples":5},{"name":"new Blob (1024)","opsSec":412.3146151216973,"samples":2},{"name":"text (128)","opsSec":25961.680771526397,"samples":4},{"name":"text (1024)","opsSec":15182.12769293094,"samples":3},{"name":"arrayBuffer (128)","opsSec":31679.10356252593,"samples":5},{"name":"arrayBuffer (1024)","opsSec":18255.25050482964,"samples":3},{"name":"slice (0, 64)","opsSec":64059.91729934406,"samples":3},{"name":"slice (0, 512)","opsSec":31705.251264971273,"samples":3}]}-->
