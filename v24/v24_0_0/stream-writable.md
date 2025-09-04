## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,023|5022|
|streams.web.WritableStream writing 1e3 * "some data"|1,698|875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5022,"opsSec":10023.10071242731},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":875,"opsSec":1698.5193032768548}]}-->
