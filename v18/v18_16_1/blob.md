## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,392|85|
|new Blob (1024)|560|74|
|text (128)|49,945|87|
|text (1024)|33,300|79|
|arrayBuffer (128)|50,434|86|
|arrayBuffer (1024)|34,206|80|
|slice (0, 64)|94,569|86|
|slice (0, 512)|57,036|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:26:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4392.028438618791,"samples":3},{"name":"new Blob (1024)","opsSec":559.8306667597847,"samples":2},{"name":"text (128)","opsSec":49945.387613071325,"samples":4},{"name":"text (1024)","opsSec":33300.36816243092,"samples":3},{"name":"arrayBuffer (128)","opsSec":50433.70186425532,"samples":4},{"name":"arrayBuffer (1024)","opsSec":34205.52814895966,"samples":3},{"name":"slice (0, 64)","opsSec":94568.87686851204,"samples":3},{"name":"slice (0, 512)","opsSec":57036.35796037526,"samples":3}]}-->
