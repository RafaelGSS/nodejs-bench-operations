## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,820|90|
|new Blob (1024)|757|78|
|text (128)|6,367|89|
|text (1024)|802|91|
|arrayBuffer (128)|6,311|90|
|arrayBuffer (1024)|791|88|
|slice (0, 64)|81,238|70|
|slice (0, 512)|26,612|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:49:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5819.8638285883035,"samples":7},{"name":"new Blob (1024)","opsSec":756.9342921317424,"samples":2},{"name":"text (128)","opsSec":6367.20849578342,"samples":4},{"name":"text (1024)","opsSec":801.6555338872593,"samples":2},{"name":"arrayBuffer (128)","opsSec":6310.928051262252,"samples":3},{"name":"arrayBuffer (1024)","opsSec":790.8535271520922,"samples":2},{"name":"slice (0, 64)","opsSec":81237.89597953676,"samples":4},{"name":"slice (0, 512)","opsSec":26612.04810356972,"samples":4}]}-->
