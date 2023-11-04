## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,698|93|
|new Blob (1024)|731|78|
|text (128)|5,924|87|
|text (1024)|722|86|
|arrayBuffer (128)|5,913|89|
|arrayBuffer (1024)|755|90|
|slice (0, 64)|190,455|58|
|slice (0, 512)|31,944|65|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:06:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Blob (128)","opsSec":5697.922443167337,"samples":3},{"name":"new Blob (1024)","opsSec":730.9100181284247,"samples":2},{"name":"text (128)","opsSec":5924.373735251055,"samples":7},{"name":"text (1024)","opsSec":722.0735529684263,"samples":2},{"name":"arrayBuffer (128)","opsSec":5912.9381219791,"samples":3},{"name":"arrayBuffer (1024)","opsSec":754.9458096994156,"samples":4},{"name":"slice (0, 64)","opsSec":190454.80782303037,"samples":4},{"name":"slice (0, 512)","opsSec":31944.343183282006,"samples":4}]}-->
