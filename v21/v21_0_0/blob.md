## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,335|1168|
|new Blob (1024)|554|278|
|text (128)|4,887|2444|
|text (1024)|613|307|
|arrayBuffer (128)|4,897|2449|
|arrayBuffer (1024)|620|311|
|slice (0, 64)|274,087|137044|
|slice (0, 512)|29,891|14946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:13:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":2335.8331093869533,"samples":1168},{"name":"new Blob (1024)","opsSec":554.8143229593883,"samples":278},{"name":"text (128)","opsSec":4887.720735194246,"samples":2444},{"name":"text (1024)","opsSec":613.7422000416715,"samples":307},{"name":"arrayBuffer (128)","opsSec":4897.388864721513,"samples":2449},{"name":"arrayBuffer (1024)","opsSec":620.9327457629786,"samples":311},{"name":"slice (0, 64)","opsSec":274087.6026036449,"samples":137044},{"name":"slice (0, 512)","opsSec":29891.533213868097,"samples":14946}]}-->
