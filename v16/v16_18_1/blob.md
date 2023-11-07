## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,425|83|
|new Blob (1024)|581|75|
|text (128)|42,697|85|
|text (1024)|26,548|74|
|arrayBuffer (128)|50,092|87|
|arrayBuffer (1024)|29,764|70|
|slice (0, 64)|94,326|82|
|slice (0, 512)|44,778|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:22:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4425.27966613247,"samples":4},{"name":"new Blob (1024)","opsSec":581.0274959524711,"samples":2},{"name":"text (128)","opsSec":42696.64245428106,"samples":4},{"name":"text (1024)","opsSec":26547.55533992964,"samples":6},{"name":"arrayBuffer (128)","opsSec":50091.61108733965,"samples":4},{"name":"arrayBuffer (1024)","opsSec":29764.055426172028,"samples":3},{"name":"slice (0, 64)","opsSec":94326.11192084792,"samples":3},{"name":"slice (0, 512)","opsSec":44778.025155977295,"samples":3}]}-->
