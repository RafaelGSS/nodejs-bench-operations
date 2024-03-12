## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,803|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,511|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5802.9516357712155,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1510.5800800533805,"samples":5}]}-->
