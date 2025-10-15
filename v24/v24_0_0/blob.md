## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,803|2405|
|new Blob (1024)|601|301|
|text (128)|4,428|2220|
|text (1024)|552|279|
|arrayBuffer (128)|4,469|2235|
|arrayBuffer (1024)|553|278|
|slice (0, 64)|167,244|83624|
|slice (0, 512)|20,254|10129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:00:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2405,"opsSec":4803.21600495962},{"name":"new Blob (1024)","samples":301,"opsSec":601.6562785812966},{"name":"text (128)","samples":2220,"opsSec":4428.153670456186},{"name":"text (1024)","samples":279,"opsSec":552.6890374943589},{"name":"arrayBuffer (128)","samples":2235,"opsSec":4469.005056466269},{"name":"arrayBuffer (1024)","samples":278,"opsSec":553.8255821833944},{"name":"slice (0, 64)","samples":83624,"opsSec":167244.80328283005},{"name":"slice (0, 512)","samples":10129,"opsSec":20254.98767823249}]}-->
