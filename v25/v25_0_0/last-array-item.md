## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,006,737|48503388|
|Length = 10_000 - Array.at|97,065,486|48532749|
|Length = 1_000_000 - Array.at|95,481,125|47740871|
|Length = 100 - Array[length - 1]|91,725,311|45864470|
|Length = 10_000 - Array[length - 1]|89,943,923|44972048|
|Length = 1_000_000 - Array[length - 1]|95,092,257|47577523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:24:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48503388,"opsSec":97006737.9733587},{"name":"Length = 10_000 - Array.at","samples":48532749,"opsSec":97065486.15801068},{"name":"Length = 1_000_000 - Array.at","samples":47740871,"opsSec":95481125.5738533},{"name":"Length = 100 - Array[length - 1]","samples":45864470,"opsSec":91725311.34668311},{"name":"Length = 10_000 - Array[length - 1]","samples":44972048,"opsSec":89943923.84732975},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47577523,"opsSec":95092257.72333238}]}-->
