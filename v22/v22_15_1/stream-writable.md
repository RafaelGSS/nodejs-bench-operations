## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,376|5191|
|streams.web.WritableStream writing 1e3 * "some data"|1,581|791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:11:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5191,"opsSec":10376.97644344187},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":791,"opsSec":1581.661546572295}]}-->
