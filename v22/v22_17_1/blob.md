## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,917|2459|
|new Blob (1024)|594|298|
|text (128)|4,316|2166|
|text (1024)|542|272|
|arrayBuffer (128)|4,349|2176|
|arrayBuffer (1024)|546|274|
|slice (0, 64)|156,022|78014|
|slice (0, 512)|19,164|9694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2459,"opsSec":4917.951784400705},{"name":"new Blob (1024)","samples":298,"opsSec":594.7496304933309},{"name":"text (128)","samples":2166,"opsSec":4316.094535589981},{"name":"text (1024)","samples":272,"opsSec":542.7472319247657},{"name":"arrayBuffer (128)","samples":2176,"opsSec":4349.165127186797},{"name":"arrayBuffer (1024)","samples":274,"opsSec":546.4869459646034},{"name":"slice (0, 64)","samples":78014,"opsSec":156022.22811369316},{"name":"slice (0, 512)","samples":9694,"opsSec":19164.075898691968}]}-->
