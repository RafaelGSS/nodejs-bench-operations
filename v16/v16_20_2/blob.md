## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,214|82|
|new Blob (1024)|531|71|
|text (128)|41,174|83|
|text (1024)|26,081|77|
|arrayBuffer (128)|49,449|86|
|arrayBuffer (1024)|30,458|72|
|slice (0, 64)|88,436|78|
|slice (0, 512)|45,101|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4214.070420040036,"samples":3},{"name":"new Blob (1024)","opsSec":530.6878247079375,"samples":2},{"name":"text (128)","opsSec":41174.11350030991,"samples":4},{"name":"text (1024)","opsSec":26081.41066332862,"samples":6},{"name":"arrayBuffer (128)","opsSec":49448.79041146989,"samples":4},{"name":"arrayBuffer (1024)","opsSec":30457.68765857897,"samples":3},{"name":"slice (0, 64)","opsSec":88436.12682351758,"samples":3},{"name":"slice (0, 512)","opsSec":45100.9356953481,"samples":3}]}-->
