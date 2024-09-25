## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,347|2174|
|new Blob (1024)|495|248|
|text (128)|45,551|22776|
|text (1024)|30,449|15225|
|arrayBuffer (128)|46,339|23170|
|arrayBuffer (1024)|31,371|15686|
|slice (0, 64)|88,873|44437|
|slice (0, 512)|49,001|24501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:11:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4347.425539880528,"samples":2174},{"name":"new Blob (1024)","opsSec":495.8536150869061,"samples":248},{"name":"text (128)","opsSec":45551.87190703357,"samples":22776},{"name":"text (1024)","opsSec":30449.93867337072,"samples":15225},{"name":"arrayBuffer (128)","opsSec":46339.3827586058,"samples":23170},{"name":"arrayBuffer (1024)","opsSec":31371.20373661737,"samples":15686},{"name":"slice (0, 64)","opsSec":88873.39690128129,"samples":44437},{"name":"slice (0, 512)","opsSec":49001.8233998031,"samples":24501}]}-->
