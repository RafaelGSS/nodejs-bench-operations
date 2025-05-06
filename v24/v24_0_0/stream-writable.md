## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,451|4731|
|streams.web.WritableStream writing 1e3 * "some data"|1,710|931|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:02:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4731,"opsSec":9451.997046046139},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":931,"opsSec":1710.7312133038279}]}-->
