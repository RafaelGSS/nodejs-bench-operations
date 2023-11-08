## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,687|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,081|49|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6686.844428016537,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1080.6850753705878,"samples":3}]}-->
