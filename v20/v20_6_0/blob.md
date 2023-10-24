## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,419|81|
|new Blob (1024)|407|63|
|text (128)|3,965|85|
|text (1024)|474|85|
|arrayBuffer (128)|3,900|85|
|arrayBuffer (1024)|481|89|
|slice (0, 64)|47,388|61|
|slice (0, 512)|12,605|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3418.963106132163,"samples":4},{"name":"new Blob (1024)","opsSec":406.87683143844373,"samples":2},{"name":"text (128)","opsSec":3965.125114380847,"samples":4},{"name":"text (1024)","opsSec":474.3891725624757,"samples":3},{"name":"arrayBuffer (128)","opsSec":3899.53325722216,"samples":3},{"name":"arrayBuffer (1024)","opsSec":480.9145223801807,"samples":2},{"name":"slice (0, 64)","opsSec":47387.961651614256,"samples":3},{"name":"slice (0, 512)","opsSec":12605.338311767131,"samples":4}]}-->
