## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,347|2674|
|new Blob (1024)|728|365|
|text (128)|6,196|3099|
|text (1024)|803|402|
|arrayBuffer (128)|6,397|3199|
|arrayBuffer (1024)|796|399|
|slice (0, 64)|82,541|41271|
|slice (0, 512)|29,480|14741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5347.911010760799,"samples":2674},{"name":"new Blob (1024)","opsSec":728.6979973957565,"samples":365},{"name":"text (128)","opsSec":6196.1284098446,"samples":3099},{"name":"text (1024)","opsSec":803.7301090368419,"samples":402},{"name":"arrayBuffer (128)","opsSec":6397.893615824931,"samples":3199},{"name":"arrayBuffer (1024)","opsSec":796.8139042564502,"samples":399},{"name":"slice (0, 64)","opsSec":82541.20430278653,"samples":41271},{"name":"slice (0, 512)","opsSec":29480.842641079522,"samples":14741}]}-->
