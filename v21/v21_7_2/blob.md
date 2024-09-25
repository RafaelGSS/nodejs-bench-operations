## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,097|2049|
|new Blob (1024)|596|299|
|text (128)|4,818|2411|
|text (1024)|606|304|
|arrayBuffer (128)|4,800|2401|
|arrayBuffer (1024)|589|297|
|slice (0, 64)|223,155|111578|
|slice (0, 512)|39,002|19502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4097.877481658782,"samples":2049},{"name":"new Blob (1024)","opsSec":596.7112350088537,"samples":299},{"name":"text (128)","opsSec":4818.8100537583205,"samples":2411},{"name":"text (1024)","opsSec":606.7191430826941,"samples":304},{"name":"arrayBuffer (128)","opsSec":4800.692608179012,"samples":2401},{"name":"arrayBuffer (1024)","opsSec":589.7711169782397,"samples":297},{"name":"slice (0, 64)","opsSec":223155.9785770854,"samples":111578},{"name":"slice (0, 512)","opsSec":39002.98405026211,"samples":19502}]}-->
