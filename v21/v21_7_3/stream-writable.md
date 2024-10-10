## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,164|3083|
|streams.web.WritableStream writing 1e3 * "some data"|2,025|1022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:20:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6164.804792305698,"samples":3083},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2025.674436411132,"samples":1022}]}-->