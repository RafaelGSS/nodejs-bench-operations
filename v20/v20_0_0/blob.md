## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,936|1994|
|new Blob (1024)|529|265|
|text (128)|4,373|2187|
|text (1024)|566|284|
|arrayBuffer (128)|4,479|2240|
|arrayBuffer (1024)|557|281|
|slice (0, 64)|76,545|38273|
|slice (0, 512)|19,524|12747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1994,"opsSec":3936.268457772782},{"name":"new Blob (1024)","samples":265,"opsSec":529.2171375558878},{"name":"text (128)","samples":2187,"opsSec":4373.925310851392},{"name":"text (1024)","samples":284,"opsSec":566.4735746410365},{"name":"arrayBuffer (128)","samples":2240,"opsSec":4479.5002221602135},{"name":"arrayBuffer (1024)","samples":281,"opsSec":557.3130131640547},{"name":"slice (0, 64)","samples":38273,"opsSec":76545.0271127054},{"name":"slice (0, 512)","samples":12747,"opsSec":19524.660461796866}]}-->
