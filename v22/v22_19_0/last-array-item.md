## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|87,941,944|43970981|
|Length = 10_000 - Array.at|89,675,773|45089542|
|Length = 1_000_000 - Array.at|92,090,666|46046099|
|Length = 100 - Array[length - 1]|89,327,928|44663972|
|Length = 10_000 - Array[length - 1]|87,787,168|43893592|
|Length = 1_000_000 - Array[length - 1]|91,032,027|45516428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":43970981,"opsSec":87941944.93926267},{"name":"Length = 10_000 - Array.at","samples":45089542,"opsSec":89675773.51992457},{"name":"Length = 1_000_000 - Array.at","samples":46046099,"opsSec":92090666.53221557},{"name":"Length = 100 - Array[length - 1]","samples":44663972,"opsSec":89327928.45694046},{"name":"Length = 10_000 - Array[length - 1]","samples":43893592,"opsSec":87787168.54945834},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45516428,"opsSec":91032027.60854876}]}-->
