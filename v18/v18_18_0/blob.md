## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,382|89|
|new Blob (1024)|696|79|
|text (128)|36,100|79|
|text (1024)|23,562|84|
|arrayBuffer (128)|36,097|80|
|arrayBuffer (1024)|24,066|82|
|slice (0, 64)|98,019|81|
|slice (0, 512)|56,071|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Blob (128)","opsSec":5381.607168524502,"samples":3},{"name":"new Blob (1024)","opsSec":696.4166440556652,"samples":3},{"name":"text (128)","opsSec":36099.57530593126,"samples":4},{"name":"text (1024)","opsSec":23561.7753359357,"samples":3},{"name":"arrayBuffer (128)","opsSec":36097.18583060802,"samples":3},{"name":"arrayBuffer (1024)","opsSec":24065.72051654426,"samples":4},{"name":"slice (0, 64)","opsSec":98018.63380576635,"samples":3},{"name":"slice (0, 512)","opsSec":56071.30934621706,"samples":3}]}-->
