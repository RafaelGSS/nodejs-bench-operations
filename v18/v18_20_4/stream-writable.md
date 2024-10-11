## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,909|2455|
|streams.web.WritableStream writing 1e3 * "some data"|1,611|806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4909.229417895191,"samples":2455},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1611.5667528404333,"samples":806}]}-->
