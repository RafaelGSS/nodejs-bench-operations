## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,497|2249|
|new Blob (1024)|568|286|
|text (128)|4,770|2388|
|text (1024)|592|297|
|arrayBuffer (128)|4,811|2408|
|arrayBuffer (1024)|600|301|
|slice (0, 64)|63,608|36186|
|slice (0, 512)|25,397|12699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4497.8245758458925,"samples":2249},{"name":"new Blob (1024)","opsSec":568.2936253462835,"samples":286},{"name":"text (128)","opsSec":4770.679880917197,"samples":2388},{"name":"text (1024)","opsSec":592.194577575734,"samples":297},{"name":"arrayBuffer (128)","opsSec":4811.747531507574,"samples":2408},{"name":"arrayBuffer (1024)","opsSec":600.5952749186362,"samples":301},{"name":"slice (0, 64)","opsSec":63608.04791887838,"samples":36186},{"name":"slice (0, 512)","opsSec":25397.23940347435,"samples":12699}]}-->
