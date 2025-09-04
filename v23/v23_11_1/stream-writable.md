## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|12,020|6028|
|streams.web.WritableStream writing 1e3 * "some data"|1,597|811|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:30:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6028,"opsSec":12020.161815426336},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":811,"opsSec":1597.0316463124}]}-->
