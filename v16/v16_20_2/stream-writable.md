## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,027|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,063|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:33:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4027.0808007355645,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1062.5939286303421,"samples":3}]}-->
