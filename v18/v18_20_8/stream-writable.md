## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,762|2382|
|streams.web.WritableStream writing 1e3 * "some data"|1,517|759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2382,"opsSec":4762.546261329007},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":759,"opsSec":1517.5537451106052}]}-->
