## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,443|2233|
|new Blob (1024)|584|298|
|text (128)|4,165|2085|
|text (1024)|521|263|
|arrayBuffer (128)|4,167|2088|
|arrayBuffer (1024)|528|265|
|slice (0, 64)|149,377|86862|
|slice (0, 512)|31,791|15896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2233,"opsSec":4443.500159203864},{"name":"new Blob (1024)","samples":298,"opsSec":584.2751724939122},{"name":"text (128)","samples":2085,"opsSec":4165.679615375069},{"name":"text (1024)","samples":263,"opsSec":521.0890204964264},{"name":"arrayBuffer (128)","samples":2088,"opsSec":4167.241333836955},{"name":"arrayBuffer (1024)","samples":265,"opsSec":528.2097155697919},{"name":"slice (0, 64)","samples":86862,"opsSec":149377.82413095722},{"name":"slice (0, 512)","samples":15896,"opsSec":31791.27172554731}]}-->
