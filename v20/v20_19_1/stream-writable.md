## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,675|3838|
|streams.web.WritableStream writing 1e3 * "some data"|1,422|721|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:59:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3838,"opsSec":7675.728294569828},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":721,"opsSec":1422.0734797792886}]}-->
