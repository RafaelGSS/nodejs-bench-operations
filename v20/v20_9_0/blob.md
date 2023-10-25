## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,296|87|
|new Blob (1024)|431|73|
|text (128)|3,529|81|
|text (1024)|475|87|
|arrayBuffer (128)|3,677|83|
|arrayBuffer (1024)|472|87|
|slice (0, 64)|52,534|69|
|slice (0, 512)|15,945|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3295.5222567842234,"samples":4},{"name":"new Blob (1024)","opsSec":431.39995240058124,"samples":2},{"name":"text (128)","opsSec":3529.2129270604923,"samples":4},{"name":"text (1024)","opsSec":475.49104824036755,"samples":2},{"name":"arrayBuffer (128)","opsSec":3676.54604211186,"samples":4},{"name":"arrayBuffer (1024)","opsSec":472.46515709841503,"samples":2},{"name":"slice (0, 64)","opsSec":52533.75270082528,"samples":3},{"name":"slice (0, 512)","opsSec":15945.362057706117,"samples":3}]}-->
