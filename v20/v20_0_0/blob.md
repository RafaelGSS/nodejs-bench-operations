## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,200|2101|
|new Blob (1024)|543|275|
|text (128)|4,337|2180|
|text (1024)|518|260|
|arrayBuffer (128)|4,506|2262|
|arrayBuffer (1024)|555|280|
|slice (0, 64)|68,109|34352|
|slice (0, 512)|23,782|11892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2101,"opsSec":4200.960934322505},{"name":"new Blob (1024)","samples":275,"opsSec":543.842812894252},{"name":"text (128)","samples":2180,"opsSec":4337.475921288342},{"name":"text (1024)","samples":260,"opsSec":518.4826873764924},{"name":"arrayBuffer (128)","samples":2262,"opsSec":4506.141979091183},{"name":"arrayBuffer (1024)","samples":280,"opsSec":555.9987792490803},{"name":"slice (0, 64)","samples":34352,"opsSec":68109.25432609604},{"name":"slice (0, 512)","samples":11892,"opsSec":23782.16563400032}]}-->
