## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,875|5438|
|streams.web.WritableStream writing 1e3 * "some data"|1,704|864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":10875.875884504405,"samples":5438},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1704.203423661835,"samples":864}]}-->
