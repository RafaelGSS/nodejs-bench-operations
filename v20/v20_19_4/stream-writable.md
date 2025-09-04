## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,915|3959|
|streams.web.WritableStream writing 1e3 * "some data"|1,351|676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:26:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3959,"opsSec":7915.109133030906},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":676,"opsSec":1351.9717924605222}]}-->
