## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,354|2678|
|new Blob (1024)|747|378|
|text (128)|6,359|3180|
|text (1024)|806|404|
|arrayBuffer (128)|6,428|3215|
|arrayBuffer (1024)|799|400|
|slice (0, 64)|328,927|164464|
|slice (0, 512)|35,851|17926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5354.895991682849,"samples":2678},{"name":"new Blob (1024)","opsSec":747.8640838581191,"samples":378},{"name":"text (128)","opsSec":6359.618282907082,"samples":3180},{"name":"text (1024)","opsSec":806.7195054215019,"samples":404},{"name":"arrayBuffer (128)","opsSec":6428.1465211694895,"samples":3215},{"name":"arrayBuffer (1024)","opsSec":799.6518667596825,"samples":400},{"name":"slice (0, 64)","opsSec":328927.5743464039,"samples":164464},{"name":"slice (0, 512)","opsSec":35851.41590822439,"samples":17926}]}-->
