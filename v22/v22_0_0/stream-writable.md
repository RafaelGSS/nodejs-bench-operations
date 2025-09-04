## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,206|3104|
|streams.web.WritableStream writing 1e3 * "some data"|1,709|860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3104,"opsSec":6206.764481462321},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":860,"opsSec":1709.459595216983}]}-->
