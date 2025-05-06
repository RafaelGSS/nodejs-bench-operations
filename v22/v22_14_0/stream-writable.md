## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,293|5148|
|streams.web.WritableStream writing 1e3 * "some data"|1,637|819|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:00:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5148,"opsSec":10293.209202189011},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":819,"opsSec":1637.725314159408}]}-->
