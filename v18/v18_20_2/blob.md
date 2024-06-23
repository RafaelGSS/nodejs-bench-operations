## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,904|2453|
|new Blob (1024)|691|346|
|text (128)|51,002|25502|
|text (1024)|29,167|14585|
|arrayBuffer (128)|43,464|21733|
|arrayBuffer (1024)|25,839|12921|
|slice (0, 64)|96,345|49198|
|slice (0, 512)|52,799|26401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:52:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":4904.9173179854315,"samples":2453},{"name":"new Blob (1024)","opsSec":691.0715288142579,"samples":346},{"name":"text (128)","opsSec":51002.100681843076,"samples":25502},{"name":"text (1024)","opsSec":29167.913619462623,"samples":14585},{"name":"arrayBuffer (128)","opsSec":43464.69162588855,"samples":21733},{"name":"arrayBuffer (1024)","opsSec":25839.470883853697,"samples":12921},{"name":"slice (0, 64)","opsSec":96345.58425809864,"samples":49198},{"name":"slice (0, 512)","opsSec":52799.85759381426,"samples":26401}]}-->
