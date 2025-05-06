## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,701|2361|
|new Blob (1024)|574|290|
|text (128)|4,533|2270|
|text (1024)|569|286|
|arrayBuffer (128)|4,558|2280|
|arrayBuffer (1024)|573|288|
|slice (0, 64)|184,241|92194|
|slice (0, 512)|29,650|14826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2361,"opsSec":4701.24945590654},{"name":"new Blob (1024)","samples":290,"opsSec":574.8152196021884},{"name":"text (128)","samples":2270,"opsSec":4533.189879507813},{"name":"text (1024)","samples":286,"opsSec":569.345501751689},{"name":"arrayBuffer (128)","samples":2280,"opsSec":4558.695702455179},{"name":"arrayBuffer (1024)","samples":288,"opsSec":573.7622057599485},{"name":"slice (0, 64)","samples":92194,"opsSec":184241.51104849743},{"name":"slice (0, 512)","samples":14826,"opsSec":29650.597467438594}]}-->
