## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,502|2252|
|new Blob (1024)|619|313|
|text (128)|4,393|2203|
|text (1024)|555|279|
|arrayBuffer (128)|4,412|2209|
|arrayBuffer (1024)|557|280|
|slice (0, 64)|158,203|91419|
|slice (0, 512)|32,088|16047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:18:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2252,"opsSec":4502.214196738863},{"name":"new Blob (1024)","samples":313,"opsSec":619.8497319484588},{"name":"text (128)","samples":2203,"opsSec":4393.633485870794},{"name":"text (1024)","samples":279,"opsSec":555.9786019100627},{"name":"arrayBuffer (128)","samples":2209,"opsSec":4412.64110331321},{"name":"arrayBuffer (1024)","samples":280,"opsSec":557.5662134421332},{"name":"slice (0, 64)","samples":91419,"opsSec":158203.3495971455},{"name":"slice (0, 512)","samples":16047,"opsSec":32088.663013567584}]}-->
