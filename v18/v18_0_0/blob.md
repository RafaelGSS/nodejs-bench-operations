## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,262|2132|
|new Blob (1024)|565|289|
|text (128)|33,439|16720|
|text (1024)|15,616|7809|
|arrayBuffer (128)|41,236|20619|
|arrayBuffer (1024)|16,747|8374|
|slice (0, 64)|76,172|38087|
|slice (0, 512)|20,976|11599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:36:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4262.987617176076,"samples":2132},{"name":"new Blob (1024)","opsSec":565.0473484368795,"samples":289},{"name":"text (128)","opsSec":33439.45787925818,"samples":16720},{"name":"text (1024)","opsSec":15616.175905455455,"samples":7809},{"name":"arrayBuffer (128)","opsSec":41236.8412427354,"samples":20619},{"name":"arrayBuffer (1024)","opsSec":16747.32384414608,"samples":8374},{"name":"slice (0, 64)","opsSec":76172.2347832144,"samples":38087},{"name":"slice (0, 512)","opsSec":20976.099525734222,"samples":11599}]}-->
