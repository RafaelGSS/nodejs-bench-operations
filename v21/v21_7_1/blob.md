## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,560|89|
|new Blob (1024)|704|77|
|text (128)|5,981|89|
|text (1024)|746|89|
|arrayBuffer (128)|5,983|89|
|arrayBuffer (1024)|751|90|
|slice (0, 64)|174,750|53|
|slice (0, 512)|24,307|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5560.302575968935,"samples":5},{"name":"new Blob (1024)","opsSec":704.3495690586105,"samples":2},{"name":"text (128)","opsSec":5981.4200111769405,"samples":5},{"name":"text (1024)","opsSec":746.0643185612771,"samples":2},{"name":"arrayBuffer (128)","opsSec":5983.004045934672,"samples":3},{"name":"arrayBuffer (1024)","opsSec":750.6311800967388,"samples":3},{"name":"slice (0, 64)","opsSec":174750.0570754478,"samples":3},{"name":"slice (0, 512)","opsSec":24306.87762378252,"samples":3}]}-->
