## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,074|84|
|new Blob (1024)|380|65|
|text (128)|3,540|83|
|text (1024)|434|87|
|arrayBuffer (128)|3,464|88|
|arrayBuffer (1024)|417|88|
|slice (0, 64)|59,576|68|
|slice (0, 512)|19,789|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3073.740963633099,"samples":4},{"name":"new Blob (1024)","opsSec":380.1551186497588,"samples":2},{"name":"text (128)","opsSec":3539.90718544297,"samples":4},{"name":"text (1024)","opsSec":433.88940078333513,"samples":3},{"name":"arrayBuffer (128)","opsSec":3463.8525264972477,"samples":4},{"name":"arrayBuffer (1024)","opsSec":416.714932289845,"samples":3},{"name":"slice (0, 64)","opsSec":59576.00401361419,"samples":4},{"name":"slice (0, 512)","opsSec":19788.585538930907,"samples":3}]}-->
