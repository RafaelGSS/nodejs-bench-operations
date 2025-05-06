## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|98,055,344|49091516|
|Length = 10_000 - Array.at|100,098,288|50049322|
|Length = 1_000_000 - Array.at|99,959,714|49987640|
|Length = 100 - Array[length - 1]|96,513,682|48257668|
|Length = 10_000 - Array[length - 1]|99,452,303|49728015|
|Length = 1_000_000 - Array[length - 1]|96,616,127|48308073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49091516,"opsSec":98055344.72232397},{"name":"Length = 10_000 - Array.at","samples":50049322,"opsSec":100098288.85127115},{"name":"Length = 1_000_000 - Array.at","samples":49987640,"opsSec":99959714.67306995},{"name":"Length = 100 - Array[length - 1]","samples":48257668,"opsSec":96513682.91363905},{"name":"Length = 10_000 - Array[length - 1]","samples":49728015,"opsSec":99452303.32328987},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48308073,"opsSec":96616127.64293575}]}-->
