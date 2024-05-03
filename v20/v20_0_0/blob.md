## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,781|90|
|new Blob (1024)|753|79|
|text (128)|6,196|90|
|text (1024)|790|89|
|arrayBuffer (128)|6,228|90|
|arrayBuffer (1024)|792|90|
|slice (0, 64)|83,611|70|
|slice (0, 512)|27,376|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5781.09165227992,"samples":6},{"name":"new Blob (1024)","opsSec":753.1680276147437,"samples":2},{"name":"text (128)","opsSec":6195.827548705374,"samples":5},{"name":"text (1024)","opsSec":789.6881188410536,"samples":2},{"name":"arrayBuffer (128)","opsSec":6228.361351078386,"samples":3},{"name":"arrayBuffer (1024)","opsSec":792.3378036449587,"samples":2},{"name":"slice (0, 64)","opsSec":83610.73947590876,"samples":3},{"name":"slice (0, 512)","opsSec":27376.447277714968,"samples":3}]}-->
