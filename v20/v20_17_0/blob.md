## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,315|2164|
|new Blob (1024)|561|283|
|text (128)|4,528|2265|
|text (1024)|582|292|
|arrayBuffer (128)|4,662|2332|
|arrayBuffer (1024)|589|295|
|slice (0, 64)|62,458|32700|
|slice (0, 512)|25,236|12619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:02:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4315.139443202682,"samples":2164},{"name":"new Blob (1024)","opsSec":561.3574281165448,"samples":283},{"name":"text (128)","opsSec":4528.757462929926,"samples":2265},{"name":"text (1024)","opsSec":582.5287397835381,"samples":292},{"name":"arrayBuffer (128)","opsSec":4662.603037503934,"samples":2332},{"name":"arrayBuffer (1024)","opsSec":589.5883069936989,"samples":295},{"name":"slice (0, 64)","opsSec":62458.53944372801,"samples":32700},{"name":"slice (0, 512)","opsSec":25236.26995274966,"samples":12619}]}-->
