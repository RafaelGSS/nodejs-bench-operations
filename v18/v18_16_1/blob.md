## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,410|85|
|new Blob (1024)|561|74|
|text (128)|49,429|86|
|text (1024)|31,269|75|
|arrayBuffer (128)|50,119|85|
|arrayBuffer (1024)|32,421|76|
|slice (0, 64)|90,204|83|
|slice (0, 512)|57,211|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:24:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4409.918602189906,"samples":5},{"name":"new Blob (1024)","opsSec":561.1209630332155,"samples":2},{"name":"text (128)","opsSec":49428.755942972115,"samples":4},{"name":"text (1024)","opsSec":31268.78099442001,"samples":4},{"name":"arrayBuffer (128)","opsSec":50119.32952716202,"samples":6},{"name":"arrayBuffer (1024)","opsSec":32420.892641713104,"samples":3},{"name":"slice (0, 64)","opsSec":90204.43668990945,"samples":4},{"name":"slice (0, 512)","opsSec":57211.390958904965,"samples":3}]}-->
