## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,501|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,515|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5500.864575480467,"samples":7},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1515.3167776310027,"samples":4}]}-->
