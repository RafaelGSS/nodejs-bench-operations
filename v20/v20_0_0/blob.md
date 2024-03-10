## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,358|91|
|new Blob (1024)|698|92|
|text (128)|5,978|89|
|text (1024)|726|87|
|arrayBuffer (128)|5,993|90|
|arrayBuffer (1024)|724|87|
|slice (0, 64)|76,775|71|
|slice (0, 512)|21,254|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5358.2180189981,"samples":4},{"name":"new Blob (1024)","opsSec":697.8925220554731,"samples":4},{"name":"text (128)","opsSec":5978.271510043439,"samples":6},{"name":"text (1024)","opsSec":726.3946276330998,"samples":3},{"name":"arrayBuffer (128)","opsSec":5993.172186722711,"samples":4},{"name":"arrayBuffer (1024)","opsSec":724.48346516968,"samples":3},{"name":"slice (0, 64)","opsSec":76775.17583699913,"samples":3},{"name":"slice (0, 512)","opsSec":21254.074299950567,"samples":4}]}-->
