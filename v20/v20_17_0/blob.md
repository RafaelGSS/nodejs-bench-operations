## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,006|2007|
|new Blob (1024)|524|263|
|text (128)|4,455|2228|
|text (1024)|568|286|
|arrayBuffer (128)|4,496|2249|
|arrayBuffer (1024)|572|288|
|slice (0, 64)|61,192|35268|
|slice (0, 512)|25,052|12527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:02:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4006.52064328919,"samples":2007},{"name":"new Blob (1024)","opsSec":524.5387044086266,"samples":263},{"name":"text (128)","opsSec":4455.5763103374975,"samples":2228},{"name":"text (1024)","opsSec":568.7871964204242,"samples":286},{"name":"arrayBuffer (128)","opsSec":4496.79767321892,"samples":2249},{"name":"arrayBuffer (1024)","opsSec":572.1138753097595,"samples":288},{"name":"slice (0, 64)","opsSec":61192.72841540543,"samples":35268},{"name":"slice (0, 512)","opsSec":25052.506770386455,"samples":12527}]}-->
