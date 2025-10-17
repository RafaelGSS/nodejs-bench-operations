## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,981|4994|
|streams.web.WritableStream writing 1e3 * "some data"|1,636|886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:11:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4994,"opsSec":9981.786737027669},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":886,"opsSec":1636.164990220193}]}-->
