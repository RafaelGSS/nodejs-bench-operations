## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,426|83|
|new Blob (1024)|561|75|
|text (128)|4,790|83|
|text (1024)|607|86|
|arrayBuffer (128)|4,813|82|
|arrayBuffer (1024)|608|86|
|slice (0, 64)|68,215|68|
|slice (0, 512)|19,164|62|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:28:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4426.1326495393305,"samples":5},{"name":"new Blob (1024)","opsSec":561.1137523796411,"samples":2},{"name":"text (128)","opsSec":4790.207295795042,"samples":5},{"name":"text (1024)","opsSec":607.4332998245562,"samples":4},{"name":"arrayBuffer (128)","opsSec":4813.395019995601,"samples":3},{"name":"arrayBuffer (1024)","opsSec":608.2203283107427,"samples":3},{"name":"slice (0, 64)","opsSec":68214.66766216386,"samples":3},{"name":"slice (0, 512)","opsSec":19163.681648935875,"samples":4}]}-->
