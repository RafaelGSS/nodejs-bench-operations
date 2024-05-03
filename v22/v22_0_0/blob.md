## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,550|84|
|new Blob (1024)|836|76|
|text (128)|6,774|87|
|text (1024)|859|89|
|arrayBuffer (128)|6,812|88|
|arrayBuffer (1024)|854|88|
|slice (0, 64)|244,497|57|
|slice (0, 512)|27,921|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:53:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6549.744270873954,"samples":5},{"name":"new Blob (1024)","opsSec":836.0468936761839,"samples":2},{"name":"text (128)","opsSec":6774.479261130344,"samples":4},{"name":"text (1024)","opsSec":859.493924981644,"samples":3},{"name":"arrayBuffer (128)","opsSec":6812.388310807467,"samples":5},{"name":"arrayBuffer (1024)","opsSec":853.5913088831454,"samples":2},{"name":"slice (0, 64)","opsSec":244497.2002909894,"samples":3},{"name":"slice (0, 512)","opsSec":27920.66685398821,"samples":4}]}-->
