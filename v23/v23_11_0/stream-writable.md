## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|12,329|6175|
|streams.web.WritableStream writing 1e3 * "some data"|1,591|804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:27:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6175,"opsSec":12329.555771756175},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":804,"opsSec":1591.610098966415}]}-->
