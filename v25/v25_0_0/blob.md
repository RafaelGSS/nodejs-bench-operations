## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,079|2546|
|new Blob (1024)|637|319|
|text (128)|4,489|2245|
|text (1024)|566|284|
|arrayBuffer (128)|4,515|2258|
|arrayBuffer (1024)|562|282|
|slice (0, 64)|175,780|96790|
|slice (0, 512)|39,173|19587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:51:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2546,"opsSec":5079.823946470451},{"name":"new Blob (1024)","samples":319,"opsSec":637.8146867696472},{"name":"text (128)","samples":2245,"opsSec":4489.854286268993},{"name":"text (1024)","samples":284,"opsSec":566.6872361495998},{"name":"arrayBuffer (128)","samples":2258,"opsSec":4515.48986704776},{"name":"arrayBuffer (1024)","samples":282,"opsSec":562.1962517945275},{"name":"slice (0, 64)","samples":96790,"opsSec":175780.92423594085},{"name":"slice (0, 512)","samples":19587,"opsSec":39173.71818427138}]}-->
