## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,191|2100|
|streams.web.WritableStream writing 1e3 * "some data"|1,498|765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:02:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2100,"opsSec":4191.894778618382},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":765,"opsSec":1498.216476103976}]}-->
