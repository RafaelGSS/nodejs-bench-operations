## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,021|5011|
|streams.web.WritableStream writing 1e3 * "some data"|1,688|845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5011,"opsSec":10021.214537204574},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":845,"opsSec":1688.725724720092}]}-->
