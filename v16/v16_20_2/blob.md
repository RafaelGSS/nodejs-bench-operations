## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,141|86|
|new Blob (1024)|417|71|
|text (128)|25,880|82|
|text (1024)|17,022|74|
|arrayBuffer (128)|31,655|88|
|arrayBuffer (1024)|20,111|88|
|slice (0, 64)|66,711|80|
|slice (0, 512)|33,436|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3140.6555558755676,"samples":4},{"name":"new Blob (1024)","opsSec":416.7626701926918,"samples":2},{"name":"text (128)","opsSec":25880.48897899092,"samples":4},{"name":"text (1024)","opsSec":17021.63439217799,"samples":3},{"name":"arrayBuffer (128)","opsSec":31654.791214231278,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20110.53845452326,"samples":3},{"name":"slice (0, 64)","opsSec":66711.38966037962,"samples":4},{"name":"slice (0, 512)","opsSec":33436.16728876442,"samples":3}]}-->
