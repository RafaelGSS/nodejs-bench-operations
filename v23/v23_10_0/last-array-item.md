## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|89,218,470|44864933|
|Length = 10_000 - Array.at|94,675,812|47338117|
|Length = 1_000_000 - Array.at|94,701,926|47351704|
|Length = 100 - Array[length - 1]|92,444,206|46522324|
|Length = 10_000 - Array[length - 1]|92,970,273|46485138|
|Length = 1_000_000 - Array[length - 1]|93,038,977|46519529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:56:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":44864933,"opsSec":89218470.89947553},{"name":"Length = 10_000 - Array.at","samples":47338117,"opsSec":94675812.12458116},{"name":"Length = 1_000_000 - Array.at","samples":47351704,"opsSec":94701926.10426033},{"name":"Length = 100 - Array[length - 1]","samples":46522324,"opsSec":92444206.60790132},{"name":"Length = 10_000 - Array[length - 1]","samples":46485138,"opsSec":92970273.5827729},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46519529,"opsSec":93038977.24216774}]}-->
