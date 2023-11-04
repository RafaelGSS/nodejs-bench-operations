## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,781|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,564|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:51:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5780.751643470282,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1564.0615869462836,"samples":3}]}-->
