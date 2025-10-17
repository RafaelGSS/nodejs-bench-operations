## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,625|4813|
|streams.web.WritableStream writing 1e3 * "some data"|1,665|901|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:09:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4813,"opsSec":9625.018536859796},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":901,"opsSec":1665.133416375502}]}-->
