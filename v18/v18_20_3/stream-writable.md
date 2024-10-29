## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,999|2500|
|streams.web.WritableStream writing 1e3 * "some data"|1,757|881|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:34:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4999.168098435076,"samples":2500},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1757.8285252519809,"samples":881}]}-->
