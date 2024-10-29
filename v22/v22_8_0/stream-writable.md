## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,755|3878|
|streams.web.WritableStream writing 1e3 * "some data"|1,687|846|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:37:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7755.333460110437,"samples":3878},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1687.9718577181786,"samples":846}]}-->
