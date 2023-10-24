## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,345|82|
|new Blob (1024)|415|69|
|text (128)|31,621|65|
|text (1024)|21,486|88|
|arrayBuffer (128)|31,778|86|
|arrayBuffer (1024)|21,766|86|
|slice (0, 64)|55,334|77|
|slice (0, 512)|25,542|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3344.5140802565184,"samples":3},{"name":"new Blob (1024)","opsSec":414.6249323974734,"samples":2},{"name":"text (128)","opsSec":31621.42666955989,"samples":4},{"name":"text (1024)","opsSec":21485.513496166353,"samples":5},{"name":"arrayBuffer (128)","opsSec":31778.216760966185,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21766.01032204355,"samples":3},{"name":"slice (0, 64)","opsSec":55334.38532279412,"samples":3},{"name":"slice (0, 512)","opsSec":25542.45732223904,"samples":5}]}-->
