## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,429|2216|
|new Blob (1024)|535|269|
|text (128)|35,495|17786|
|text (1024)|14,336|7169|
|arrayBuffer (128)|42,990|21515|
|arrayBuffer (1024)|16,628|8315|
|slice (0, 64)|81,797|40900|
|slice (0, 512)|25,868|14073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:01:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4429.815578201708,"samples":2216},{"name":"new Blob (1024)","opsSec":535.864610606879,"samples":269},{"name":"text (128)","opsSec":35495.73584971451,"samples":17786},{"name":"text (1024)","opsSec":14336.63962493927,"samples":7169},{"name":"arrayBuffer (128)","opsSec":42990.552986334114,"samples":21515},{"name":"arrayBuffer (1024)","opsSec":16628.691455012024,"samples":8315},{"name":"slice (0, 64)","opsSec":81797.54820029024,"samples":40900},{"name":"slice (0, 512)","opsSec":25868.838097635093,"samples":14073}]}-->
