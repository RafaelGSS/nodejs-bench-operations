## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,860|5431|
|streams.web.WritableStream writing 1e3 * "some data"|1,699|855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:12:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5431,"opsSec":10860.30368572611},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":855,"opsSec":1699.9766520633568}]}-->
