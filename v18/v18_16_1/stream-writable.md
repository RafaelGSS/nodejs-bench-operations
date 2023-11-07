## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,244|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,089|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:33:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5244.2470694330905,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1088.7742006403353,"samples":4}]}-->
