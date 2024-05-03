## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,080|92|
|new Blob (1024)|766|78|
|text (128)|6,611|87|
|text (1024)|829|90|
|arrayBuffer (128)|6,582|91|
|arrayBuffer (1024)|825|89|
|slice (0, 64)|206,923|58|
|slice (0, 512)|34,228|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:50:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6080.411644019667,"samples":6},{"name":"new Blob (1024)","opsSec":766.4817114410358,"samples":2},{"name":"text (128)","opsSec":6611.215632117522,"samples":4},{"name":"text (1024)","opsSec":828.8823967483104,"samples":2},{"name":"arrayBuffer (128)","opsSec":6581.550945950714,"samples":3},{"name":"arrayBuffer (1024)","opsSec":825.0724572293523,"samples":2},{"name":"slice (0, 64)","opsSec":206923.4884239006,"samples":3},{"name":"slice (0, 512)","opsSec":34227.792719833764,"samples":3}]}-->
