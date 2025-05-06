## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,504,350|46752183|
|Length = 10_000 - Array.at|93,255,382|46627700|
|Length = 1_000_000 - Array.at|93,914,047|46963102|
|Length = 100 - Array[length - 1]|93,495,827|46749347|
|Length = 10_000 - Array[length - 1]|92,919,477|46459746|
|Length = 1_000_000 - Array[length - 1]|92,299,823|46149924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:56:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46752183,"opsSec":93504350.10426047},{"name":"Length = 10_000 - Array.at","samples":46627700,"opsSec":93255382.46798809},{"name":"Length = 1_000_000 - Array.at","samples":46963102,"opsSec":93914047.95346099},{"name":"Length = 100 - Array[length - 1]","samples":46749347,"opsSec":93495827.97888914},{"name":"Length = 10_000 - Array[length - 1]","samples":46459746,"opsSec":92919477.69040042},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46149924,"opsSec":92299823.07904777}]}-->
