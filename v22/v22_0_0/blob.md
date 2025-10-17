## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,780|2391|
|new Blob (1024)|603|302|
|text (128)|4,565|2291|
|text (1024)|586|294|
|arrayBuffer (128)|4,640|2321|
|arrayBuffer (1024)|584|293|
|slice (0, 64)|190,876|96597|
|slice (0, 512)|29,822|14912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:48:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2391,"opsSec":4780.960418404701},{"name":"new Blob (1024)","samples":302,"opsSec":603.0214168447443},{"name":"text (128)","samples":2291,"opsSec":4565.117856348501},{"name":"text (1024)","samples":294,"opsSec":586.2937538465058},{"name":"arrayBuffer (128)","samples":2321,"opsSec":4640.383448179691},{"name":"arrayBuffer (1024)","samples":293,"opsSec":584.5130537355238},{"name":"slice (0, 64)","samples":96597,"opsSec":190876.03540201226},{"name":"slice (0, 512)","samples":14912,"opsSec":29822.674918908004}]}-->
