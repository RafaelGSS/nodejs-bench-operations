## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,781|93|
|streams.web.WritableStream writing 1e3 * "some data"|1,085|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:36:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6780.971042972062,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1084.6454296231311,"samples":4}]}-->
