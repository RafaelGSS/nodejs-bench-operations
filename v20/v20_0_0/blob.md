## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,165|80|
|new Blob (1024)|388|62|
|text (128)|3,550|82|
|text (1024)|446|86|
|arrayBuffer (128)|3,611|87|
|arrayBuffer (1024)|449|87|
|slice (0, 64)|48,379|63|
|slice (0, 512)|14,921|62|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3165.2249175745583,"samples":6},{"name":"new Blob (1024)","opsSec":387.9895969444173,"samples":2},{"name":"text (128)","opsSec":3549.6626387408146,"samples":4},{"name":"text (1024)","opsSec":446.0646387364213,"samples":2},{"name":"arrayBuffer (128)","opsSec":3611.072240950129,"samples":3},{"name":"arrayBuffer (1024)","opsSec":448.9891745074843,"samples":2},{"name":"slice (0, 64)","opsSec":48378.80262724382,"samples":3},{"name":"slice (0, 512)","opsSec":14920.716999166565,"samples":4}]}-->
