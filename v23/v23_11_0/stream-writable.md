## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|13,311|6661|
|streams.web.WritableStream writing 1e3 * "some data"|1,701|851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:59:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6661,"opsSec":13311.963737803086},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":851,"opsSec":1701.7745318922698}]}-->
