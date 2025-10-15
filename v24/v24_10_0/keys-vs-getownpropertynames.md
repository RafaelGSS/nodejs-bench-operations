## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,366,925|22218943|
|Using Object.getOwnPropertyNames()|46,472,068|23236534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:43:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":22218943,"opsSec":44366925.89366109},{"name":"Using Object.getOwnPropertyNames()","samples":23236534,"opsSec":46472068.94346186}]}-->
