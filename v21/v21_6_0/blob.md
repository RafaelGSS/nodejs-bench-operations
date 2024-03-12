## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,563|94|
|new Blob (1024)|698|75|
|text (128)|5,989|87|
|text (1024)|765|89|
|arrayBuffer (128)|5,996|89|
|arrayBuffer (1024)|759|86|
|slice (0, 64)|176,730|54|
|slice (0, 512)|30,780|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5562.630066724412,"samples":4},{"name":"new Blob (1024)","opsSec":697.8456788429077,"samples":2},{"name":"text (128)","opsSec":5989.035713019709,"samples":6},{"name":"text (1024)","opsSec":765.4663738150861,"samples":2},{"name":"arrayBuffer (128)","opsSec":5996.460641140548,"samples":4},{"name":"arrayBuffer (1024)","opsSec":759.2857876648316,"samples":2},{"name":"slice (0, 64)","opsSec":176729.80182241416,"samples":3},{"name":"slice (0, 512)","opsSec":30779.96131149406,"samples":4}]}-->
