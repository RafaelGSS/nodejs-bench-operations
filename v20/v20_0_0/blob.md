## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,332|89|
|new Blob (1024)|692|77|
|text (128)|5,836|88|
|text (1024)|732|86|
|arrayBuffer (128)|5,877|88|
|arrayBuffer (1024)|750|87|
|slice (0, 64)|75,926|70|
|slice (0, 512)|21,436|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Blob (128)","opsSec":5332.3949761928725,"samples":3},{"name":"new Blob (1024)","opsSec":692.3163376166036,"samples":2},{"name":"text (128)","opsSec":5836.343214553255,"samples":4},{"name":"text (1024)","opsSec":731.9183671693315,"samples":2},{"name":"arrayBuffer (128)","opsSec":5877.474200661566,"samples":4},{"name":"arrayBuffer (1024)","opsSec":750.0560603861633,"samples":2},{"name":"slice (0, 64)","opsSec":75925.62395449633,"samples":3},{"name":"slice (0, 512)","opsSec":21435.58334929115,"samples":4}]}-->
