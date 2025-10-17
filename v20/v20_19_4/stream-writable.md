## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|8,024|4013|
|streams.web.WritableStream writing 1e3 * "some data"|1,361|696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:09:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4013,"opsSec":8024.3575905370835},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":696,"opsSec":1361.9469623569366}]}-->
