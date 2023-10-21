## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,246|82|
|new Blob (1024)|398|64|
|text (128)|3,507|79|
|text (1024)|426|82|
|arrayBuffer (128)|3,521|80|
|arrayBuffer (1024)|442|85|
|slice (0, 64)|52,334|63|
|slice (0, 512)|18,489|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3245.5430957540166,"samples":3},{"name":"new Blob (1024)","opsSec":398.1902151854018,"samples":2},{"name":"text (128)","opsSec":3506.7505462332706,"samples":4},{"name":"text (1024)","opsSec":426.4939596815052,"samples":3},{"name":"arrayBuffer (128)","opsSec":3520.7790283863415,"samples":3},{"name":"arrayBuffer (1024)","opsSec":441.6120496289598,"samples":3},{"name":"slice (0, 64)","opsSec":52333.65106858017,"samples":3},{"name":"slice (0, 512)","opsSec":18488.862022245543,"samples":5}]}-->
