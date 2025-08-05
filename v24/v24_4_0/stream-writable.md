## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,300|5152|
|streams.web.WritableStream writing 1e3 * "some data"|1,662|851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:42:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5152,"opsSec":10300.683509531804},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":851,"opsSec":1662.0888780680154}]}-->
