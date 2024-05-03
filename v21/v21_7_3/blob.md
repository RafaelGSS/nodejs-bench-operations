## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,045|90|
|new Blob (1024)|767|77|
|text (128)|6,447|88|
|text (1024)|813|88|
|arrayBuffer (128)|6,446|90|
|arrayBuffer (1024)|816|90|
|slice (0, 64)|202,761|58|
|slice (0, 512)|27,697|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:52:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6044.6659276934115,"samples":5},{"name":"new Blob (1024)","opsSec":766.588770581704,"samples":2},{"name":"text (128)","opsSec":6447.481139966268,"samples":6},{"name":"text (1024)","opsSec":812.6987539342531,"samples":2},{"name":"arrayBuffer (128)","opsSec":6445.982107741202,"samples":5},{"name":"arrayBuffer (1024)","opsSec":815.9479908326671,"samples":2},{"name":"slice (0, 64)","opsSec":202760.58162225556,"samples":3},{"name":"slice (0, 512)","opsSec":27697.440103380963,"samples":4}]}-->
