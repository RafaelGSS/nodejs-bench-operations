## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,583|84|
|new Blob (1024)|585|77|
|text (128)|49,302|84|
|text (1024)|32,509|80|
|arrayBuffer (128)|50,416|86|
|arrayBuffer (1024)|33,972|81|
|slice (0, 64)|86,067|83|
|slice (0, 512)|45,794|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:28:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4583.292036480701,"samples":4},{"name":"new Blob (1024)","opsSec":584.585250122532,"samples":2},{"name":"text (128)","opsSec":49301.89053034829,"samples":6},{"name":"text (1024)","opsSec":32508.701530364033,"samples":3},{"name":"arrayBuffer (128)","opsSec":50415.97200567986,"samples":4},{"name":"arrayBuffer (1024)","opsSec":33972.48565300856,"samples":3},{"name":"slice (0, 64)","opsSec":86066.8240431217,"samples":3},{"name":"slice (0, 512)","opsSec":45794.2699278767,"samples":3}]}-->
