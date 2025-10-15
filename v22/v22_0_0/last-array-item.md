## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,068,476|48701044|
|Length = 10_000 - Array.at|98,677,236|49338631|
|Length = 1_000_000 - Array.at|98,898,471|49450096|
|Length = 100 - Array[length - 1]|96,627,060|48313740|
|Length = 10_000 - Array[length - 1]|96,631,374|48330505|
|Length = 1_000_000 - Array[length - 1]|97,195,228|48599659|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:48:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48701044,"opsSec":97068476.26597576},{"name":"Length = 10_000 - Array.at","samples":49338631,"opsSec":98677236.54127297},{"name":"Length = 1_000_000 - Array.at","samples":49450096,"opsSec":98898471.75998221},{"name":"Length = 100 - Array[length - 1]","samples":48313740,"opsSec":96627060.8318101},{"name":"Length = 10_000 - Array[length - 1]","samples":48330505,"opsSec":96631374.12386996},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48599659,"opsSec":97195228.219187}]}-->
