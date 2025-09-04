## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|12,118|6067|
|streams.web.WritableStream writing 1e3 * "some data"|1,636|841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6067,"opsSec":12118.290236322919},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":841,"opsSec":1636.779663609394}]}-->
