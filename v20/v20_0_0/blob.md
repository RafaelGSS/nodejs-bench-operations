## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,285|2143|
|new Blob (1024)|557|279|
|text (128)|4,370|2186|
|text (1024)|565|283|
|arrayBuffer (128)|4,559|2280|
|arrayBuffer (1024)|569|285|
|slice (0, 64)|87,487|44074|
|slice (0, 512)|20,797|10399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:38:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4285.826835495075,"samples":2143},{"name":"new Blob (1024)","opsSec":557.3585494207468,"samples":279},{"name":"text (128)","opsSec":4370.967402703536,"samples":2186},{"name":"text (1024)","opsSec":565.9200185293079,"samples":283},{"name":"arrayBuffer (128)","opsSec":4559.4910421949435,"samples":2280},{"name":"arrayBuffer (1024)","opsSec":569.2643897246238,"samples":285},{"name":"slice (0, 64)","opsSec":87487.5118081341,"samples":44074},{"name":"slice (0, 512)","opsSec":20797.331074091842,"samples":10399}]}-->
