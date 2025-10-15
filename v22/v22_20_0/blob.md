## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,487|2245|
|new Blob (1024)|581|295|
|text (128)|4,153|2077|
|text (1024)|526|264|
|arrayBuffer (128)|4,146|2077|
|arrayBuffer (1024)|524|263|
|slice (0, 64)|251,409|136866|
|slice (0, 512)|34,988|24497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:04:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2245,"opsSec":4487.528879397156},{"name":"new Blob (1024)","samples":295,"opsSec":581.1122713438942},{"name":"text (128)","samples":2077,"opsSec":4153.88183036969},{"name":"text (1024)","samples":264,"opsSec":526.402460127541},{"name":"arrayBuffer (128)","samples":2077,"opsSec":4146.341185391592},{"name":"arrayBuffer (1024)","samples":263,"opsSec":524.0244550537192},{"name":"slice (0, 64)","samples":136866,"opsSec":251409.94318885845},{"name":"slice (0, 512)","samples":24497,"opsSec":34988.952170865094}]}-->
