## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,241|2121|
|new Blob (1024)|573|287|
|text (128)|4,091|2046|
|text (1024)|508|255|
|arrayBuffer (128)|4,055|2028|
|arrayBuffer (1024)|512|257|
|slice (0, 64)|149,281|87488|
|slice (0, 512)|31,606|15813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2121,"opsSec":4241.582382281805},{"name":"new Blob (1024)","samples":287,"opsSec":573.234583935923},{"name":"text (128)","samples":2046,"opsSec":4091.1738365377973},{"name":"text (1024)","samples":255,"opsSec":508.9818307099206},{"name":"arrayBuffer (128)","samples":2028,"opsSec":4055.5478956316906},{"name":"arrayBuffer (1024)","samples":257,"opsSec":512.3898681279542},{"name":"slice (0, 64)","samples":87488,"opsSec":149281.90537112023},{"name":"slice (0, 512)","samples":15813,"opsSec":31606.74536036694}]}-->
