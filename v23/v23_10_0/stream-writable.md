## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|11,435|5718|
|streams.web.WritableStream writing 1e3 * "some data"|1,585|796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:01:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5718,"opsSec":11435.839875370066},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":796,"opsSec":1585.1356682669814}]}-->
