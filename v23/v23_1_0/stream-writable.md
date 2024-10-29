## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|13,450|6736|
|streams.web.WritableStream writing 1e3 * "some data"|1,635|818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:38:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":13450.288517374676,"samples":6736},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1635.5276040200204,"samples":818}]}-->
