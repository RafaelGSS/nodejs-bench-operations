## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|10,506|91|
|new Blob (1024)|1,300|78|
|text (128)|30,019|79|
|text (1024)|14,412|86|
|arrayBuffer (128)|34,696|83|
|arrayBuffer (1024)|16,449|87|
|slice (0, 64)|245,090|74|
|slice (0, 512)|39,790|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Blob (128)","opsSec":10506.230873787701,"samples":5},{"name":"new Blob (1024)","opsSec":1300.0537136339867,"samples":2},{"name":"text (128)","opsSec":30018.957500091576,"samples":4},{"name":"text (1024)","opsSec":14411.632482846986,"samples":3},{"name":"arrayBuffer (128)","opsSec":34696.48304570666,"samples":5},{"name":"arrayBuffer (1024)","opsSec":16449.424465311913,"samples":4},{"name":"slice (0, 64)","opsSec":245089.56128858146,"samples":4},{"name":"slice (0, 512)","opsSec":39789.898816241024,"samples":3}]}-->
