## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,073|3037|
|streams.web.WritableStream writing 1e3 * "some data"|1,481|741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:10:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3037,"opsSec":6073.929335906106},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":741,"opsSec":1481.2612683427747}]}-->
