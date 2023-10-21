## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,378|91|
|new Blob (1024)|430|71|
|text (128)|31,171|78|
|text (1024)|22,674|83|
|arrayBuffer (128)|31,141|81|
|arrayBuffer (1024)|23,523|86|
|slice (0, 64)|54,420|75|
|slice (0, 512)|27,201|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3378.054237974091,"samples":3},{"name":"new Blob (1024)","opsSec":430.0173153812039,"samples":2},{"name":"text (128)","opsSec":31171.47618106299,"samples":4},{"name":"text (1024)","opsSec":22673.522626879192,"samples":4},{"name":"arrayBuffer (128)","opsSec":31141.42176477799,"samples":5},{"name":"arrayBuffer (1024)","opsSec":23523.115307515083,"samples":5},{"name":"slice (0, 64)","opsSec":54419.9762709935,"samples":4},{"name":"slice (0, 512)","opsSec":27200.766638190118,"samples":3}]}-->
