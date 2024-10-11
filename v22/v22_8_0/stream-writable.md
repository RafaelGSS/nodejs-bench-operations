## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,280|3641|
|streams.web.WritableStream writing 1e3 * "some data"|1,665|836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7280.46121627825,"samples":3641},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1665.1685428126616,"samples":836}]}-->
