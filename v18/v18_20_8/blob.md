## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,782|1925|
|new Blob (1024)|496|249|
|text (128)|45,968|22985|
|text (1024)|27,603|13802|
|arrayBuffer (128)|49,122|24562|
|arrayBuffer (1024)|28,158|14080|
|slice (0, 64)|80,013|40634|
|slice (0, 512)|43,103|21557|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":1925,"opsSec":3782.131822945179},{"name":"new Blob (1024)","samples":249,"opsSec":496.676993545461},{"name":"text (128)","samples":22985,"opsSec":45968.60917376084},{"name":"text (1024)","samples":13802,"opsSec":27603.859441147724},{"name":"arrayBuffer (128)","samples":24562,"opsSec":49122.21254093006},{"name":"arrayBuffer (1024)","samples":14080,"opsSec":28158.3445146093},{"name":"slice (0, 64)","samples":40634,"opsSec":80013.41651357508},{"name":"slice (0, 512)","samples":21557,"opsSec":43103.6780484251}]}-->
