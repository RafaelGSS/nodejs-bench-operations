## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,159|2087|
|streams.web.WritableStream writing 1e3 * "some data"|1,409|710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2087,"opsSec":4159.847234623253},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":710,"opsSec":1409.6815763207105}]}-->
