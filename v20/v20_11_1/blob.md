## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,246|89|
|new Blob (1024)|663|85|
|text (128)|5,694|86|
|text (1024)|735|89|
|arrayBuffer (128)|5,668|85|
|arrayBuffer (1024)|725|85|
|slice (0, 64)|73,567|69|
|slice (0, 512)|21,484|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:43:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5246.4801686687715,"samples":3},{"name":"new Blob (1024)","opsSec":662.7970801668866,"samples":2},{"name":"text (128)","opsSec":5694.09235630435,"samples":7},{"name":"text (1024)","opsSec":735.090866487838,"samples":3},{"name":"arrayBuffer (128)","opsSec":5668.456850854706,"samples":3},{"name":"arrayBuffer (1024)","opsSec":725.152750533585,"samples":3},{"name":"slice (0, 64)","opsSec":73567.34427315889,"samples":3},{"name":"slice (0, 512)","opsSec":21484.4212731437,"samples":3}]}-->
