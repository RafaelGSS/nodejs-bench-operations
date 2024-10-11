## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,238|3122|
|streams.web.WritableStream writing 1e3 * "some data"|1,375|688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:56:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6238.988619737036,"samples":3122},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1375.7659712021707,"samples":688}]}-->
