## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|8,122|4062|
|streams.web.WritableStream writing 1e3 * "some data"|1,407|704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:10:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4062,"opsSec":8122.89929840767},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":704,"opsSec":1407.3718927390144}]}-->
