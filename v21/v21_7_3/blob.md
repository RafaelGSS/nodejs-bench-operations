## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,004|2036|
|new Blob (1024)|581|291|
|text (128)|4,904|2453|
|text (1024)|606|305|
|arrayBuffer (128)|4,892|2447|
|arrayBuffer (1024)|601|301|
|slice (0, 64)|226,244|113123|
|slice (0, 512)|39,458|19730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:14:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4004.4011042983734,"samples":2036},{"name":"new Blob (1024)","opsSec":581.5411814540589,"samples":291},{"name":"text (128)","opsSec":4904.779681006012,"samples":2453},{"name":"text (1024)","opsSec":606.5136407164987,"samples":305},{"name":"arrayBuffer (128)","opsSec":4892.306175971143,"samples":2447},{"name":"arrayBuffer (1024)","opsSec":601.6340741234225,"samples":301},{"name":"slice (0, 64)","opsSec":226244.86696569718,"samples":113123},{"name":"slice (0, 512)","opsSec":39458.53048542509,"samples":19730}]}-->
