## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,387|86|
|new Blob (1024)|423|72|
|text (128)|3,636|85|
|text (1024)|454|87|
|arrayBuffer (128)|3,647|88|
|arrayBuffer (1024)|453|88|
|slice (0, 64)|50,216|68|
|slice (0, 512)|15,668|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3386.7700185706135,"samples":3},{"name":"new Blob (1024)","opsSec":422.8459296324513,"samples":2},{"name":"text (128)","opsSec":3636.4541805841286,"samples":4},{"name":"text (1024)","opsSec":453.5804617181817,"samples":3},{"name":"arrayBuffer (128)","opsSec":3646.541696079915,"samples":3},{"name":"arrayBuffer (1024)","opsSec":453.2088073322884,"samples":2},{"name":"slice (0, 64)","opsSec":50215.63539907446,"samples":3},{"name":"slice (0, 512)","opsSec":15667.672878726415,"samples":4}]}-->
