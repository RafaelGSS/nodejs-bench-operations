## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,664|4833|
|streams.web.WritableStream writing 1e3 * "some data"|1,694|848|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:42:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4833,"opsSec":9664.672093383715},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":848,"opsSec":1694.3434471890569}]}-->
