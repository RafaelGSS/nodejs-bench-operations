## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,325|2163|
|new Blob (1024)|595|298|
|text (128)|4,730|2367|
|text (1024)|603|302|
|arrayBuffer (128)|4,677|2339|
|arrayBuffer (1024)|600|301|
|slice (0, 64)|251,751|125876|
|slice (0, 512)|37,980|18991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:39:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4325.605573981527,"samples":2163},{"name":"new Blob (1024)","opsSec":595.380651704767,"samples":298},{"name":"text (128)","opsSec":4730.298106544068,"samples":2367},{"name":"text (1024)","opsSec":603.4145804491736,"samples":302},{"name":"arrayBuffer (128)","opsSec":4677.178640659618,"samples":2339},{"name":"arrayBuffer (1024)","opsSec":600.218274859374,"samples":301},{"name":"slice (0, 64)","opsSec":251751.1823121889,"samples":125876},{"name":"slice (0, 512)","opsSec":37980.55073814731,"samples":18991}]}-->
