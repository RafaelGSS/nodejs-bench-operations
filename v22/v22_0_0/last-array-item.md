## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,596,953|48798528|
|Length = 10_000 - Array.at|94,089,201|48312381|
|Length = 1_000_000 - Array.at|98,095,884|49053214|
|Length = 100 - Array[length - 1]|92,091,883|46046243|
|Length = 10_000 - Array[length - 1]|96,920,742|48460385|
|Length = 1_000_000 - Array[length - 1]|97,232,868|48616442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48798528,"opsSec":97596953.5231988},{"name":"Length = 10_000 - Array.at","samples":48312381,"opsSec":94089201.59708034},{"name":"Length = 1_000_000 - Array.at","samples":49053214,"opsSec":98095884.45814668},{"name":"Length = 100 - Array[length - 1]","samples":46046243,"opsSec":92091883.35071534},{"name":"Length = 10_000 - Array[length - 1]","samples":48460385,"opsSec":96920742.66835056},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48616442,"opsSec":97232868.83167246}]}-->
