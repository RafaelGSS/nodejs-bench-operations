## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,041|2529|
|new Blob (1024)|637|320|
|text (128)|4,164|2094|
|text (1024)|521|261|
|arrayBuffer (128)|4,169|2085|
|arrayBuffer (1024)|518|260|
|slice (0, 64)|161,523|80763|
|slice (0, 512)|20,059|11300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2529,"opsSec":5041.94211016713},{"name":"new Blob (1024)","samples":320,"opsSec":637.6659500477085},{"name":"text (128)","samples":2094,"opsSec":4164.649103999313},{"name":"text (1024)","samples":261,"opsSec":521.0046237922726},{"name":"arrayBuffer (128)","samples":2085,"opsSec":4169.092096814077},{"name":"arrayBuffer (1024)","samples":260,"opsSec":518.9538699549745},{"name":"slice (0, 64)","samples":80763,"opsSec":161523.40625714234},{"name":"slice (0, 512)","samples":11300,"opsSec":20059.95505164096}]}-->
