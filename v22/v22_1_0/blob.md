## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,253|3127|
|new Blob (1024)|807|404|
|text (128)|6,327|3164|
|text (1024)|815|408|
|arrayBuffer (128)|6,403|3202|
|arrayBuffer (1024)|801|401|
|slice (0, 64)|207,873|115023|
|slice (0, 512)|30,257|15129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:55:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6253.941813325285,"samples":3127},{"name":"new Blob (1024)","opsSec":807.9455945595622,"samples":404},{"name":"text (128)","opsSec":6327.533749348144,"samples":3164},{"name":"text (1024)","opsSec":815.5248051134049,"samples":408},{"name":"arrayBuffer (128)","opsSec":6403.192890342423,"samples":3202},{"name":"arrayBuffer (1024)","opsSec":801.6742845482386,"samples":401},{"name":"slice (0, 64)","opsSec":207873.1227311121,"samples":115023},{"name":"slice (0, 512)","opsSec":30257.60205202036,"samples":15129}]}-->
