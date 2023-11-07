## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,234|93|
|streams.web.WritableStream writing 1e3 * "some data"|1,124|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:35:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5233.569044595799,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1124.4495030251048,"samples":5}]}-->
