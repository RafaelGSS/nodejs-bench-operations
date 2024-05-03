## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,824|95|
|new Blob (1024)|749|78|
|text (128)|33,289|76|
|text (1024)|15,861|82|
|arrayBuffer (128)|37,937|75|
|arrayBuffer (1024)|17,359|83|
|slice (0, 64)|92,680|81|
|slice (0, 512)|28,646|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:45:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5823.656913428497,"samples":5},{"name":"new Blob (1024)","opsSec":749.4485532923568,"samples":3},{"name":"text (128)","opsSec":33289.316691075845,"samples":4},{"name":"text (1024)","opsSec":15860.583011873106,"samples":4},{"name":"arrayBuffer (128)","opsSec":37937.42707690699,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17359.013656625888,"samples":6},{"name":"slice (0, 64)","opsSec":92680.01520471221,"samples":3},{"name":"slice (0, 512)","opsSec":28645.833763617185,"samples":4}]}-->
