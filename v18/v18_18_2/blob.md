## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,281|84|
|new Blob (1024)|439|71|
|text (128)|32,270|69|
|text (1024)|21,333|82|
|arrayBuffer (128)|32,662|86|
|arrayBuffer (1024)|21,912|87|
|slice (0, 64)|58,606|75|
|slice (0, 512)|33,342|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3280.722456632849,"samples":5},{"name":"new Blob (1024)","opsSec":438.6681264635937,"samples":2},{"name":"text (128)","opsSec":32270.14682846502,"samples":4},{"name":"text (1024)","opsSec":21332.64541632477,"samples":4},{"name":"arrayBuffer (128)","opsSec":32661.716738334788,"samples":4},{"name":"arrayBuffer (1024)","opsSec":21912.410826105366,"samples":5},{"name":"slice (0, 64)","opsSec":58605.56962475148,"samples":3},{"name":"slice (0, 512)","opsSec":33341.8912644283,"samples":4}]}-->
