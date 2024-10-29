## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,370|3187|
|streams.web.WritableStream writing 1e3 * "some data"|2,137|1069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:35:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6370.316058963734,"samples":3187},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2137.985376180027,"samples":1069}]}-->
