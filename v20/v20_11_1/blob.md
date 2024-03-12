## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,287|89|
|new Blob (1024)|680|91|
|text (128)|5,859|88|
|text (1024)|739|88|
|arrayBuffer (128)|5,794|87|
|arrayBuffer (1024)|747|87|
|slice (0, 64)|75,940|71|
|slice (0, 512)|21,030|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5286.970023736353,"samples":4},{"name":"new Blob (1024)","opsSec":679.6942917526159,"samples":2},{"name":"text (128)","opsSec":5859.2415968254745,"samples":5},{"name":"text (1024)","opsSec":739.1095949690421,"samples":2},{"name":"arrayBuffer (128)","opsSec":5793.961519781956,"samples":6},{"name":"arrayBuffer (1024)","opsSec":746.946345861356,"samples":2},{"name":"slice (0, 64)","opsSec":75939.87472241302,"samples":3},{"name":"slice (0, 512)","opsSec":21029.9054397011,"samples":4}]}-->
