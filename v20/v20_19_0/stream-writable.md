## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|8,015|4011|
|streams.web.WritableStream writing 1e3 * "some data"|1,333|668|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:59:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4011,"opsSec":8015.654791635631},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":668,"opsSec":1333.887786023057}]}-->
