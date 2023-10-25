## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,147|84|
|new Blob (1024)|420|72|
|text (128)|26,499|81|
|text (1024)|17,468|82|
|arrayBuffer (128)|31,965|86|
|arrayBuffer (1024)|20,733|85|
|slice (0, 64)|67,317|78|
|slice (0, 512)|33,195|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3146.8126010243536,"samples":4},{"name":"new Blob (1024)","opsSec":419.80543753889685,"samples":2},{"name":"text (128)","opsSec":26498.726680166266,"samples":4},{"name":"text (1024)","opsSec":17468.012937094467,"samples":3},{"name":"arrayBuffer (128)","opsSec":31964.75407339948,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20733.11835240124,"samples":4},{"name":"slice (0, 64)","opsSec":67317.05908151966,"samples":3},{"name":"slice (0, 512)","opsSec":33194.587255267994,"samples":3}]}-->
