## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,474|90|
|new Blob (1024)|699|78|
|text (128)|5,883|87|
|text (1024)|755|90|
|arrayBuffer (128)|5,894|87|
|arrayBuffer (1024)|754|88|
|slice (0, 64)|194,095|58|
|slice (0, 512)|29,918|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5473.567234534995,"samples":3},{"name":"new Blob (1024)","opsSec":698.5926217527641,"samples":2},{"name":"text (128)","opsSec":5883.330981963861,"samples":8},{"name":"text (1024)","opsSec":754.6613501406663,"samples":2},{"name":"arrayBuffer (128)","opsSec":5894.26944202564,"samples":3},{"name":"arrayBuffer (1024)","opsSec":754.0757952044708,"samples":2},{"name":"slice (0, 64)","opsSec":194095.2085102952,"samples":4},{"name":"slice (0, 512)","opsSec":29918.285767534602,"samples":3}]}-->
