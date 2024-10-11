## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,302|2656|
|new Blob (1024)|655|329|
|text (128)|4,222|2116|
|text (1024)|532|267|
|arrayBuffer (128)|4,231|2116|
|arrayBuffer (1024)|533|268|
|slice (0, 64)|157,721|79259|
|slice (0, 512)|32,687|16348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:03:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":5302.734023777786,"samples":2656},{"name":"new Blob (1024)","opsSec":655.8444387066805,"samples":329},{"name":"text (128)","opsSec":4222.186877702581,"samples":2116},{"name":"text (1024)","opsSec":532.4939548025474,"samples":267},{"name":"arrayBuffer (128)","opsSec":4231.988108113416,"samples":2116},{"name":"arrayBuffer (1024)","opsSec":533.5061511049552,"samples":268},{"name":"slice (0, 64)","opsSec":157721.57544151356,"samples":79259},{"name":"slice (0, 512)","opsSec":32687.406284763303,"samples":16348}]}-->
