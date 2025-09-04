## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,836,510|49958316|
|Length = 10_000 - Array.at|98,393,671|49197290|
|Length = 1_000_000 - Array.at|99,126,576|49563823|
|Length = 100 - Array[length - 1]|99,251,327|49625671|
|Length = 10_000 - Array[length - 1]|97,463,816|48732157|
|Length = 1_000_000 - Array[length - 1]|96,876,358|48445156|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:16:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49958316,"opsSec":99836510.60449062},{"name":"Length = 10_000 - Array.at","samples":49197290,"opsSec":98393671.03926693},{"name":"Length = 1_000_000 - Array.at","samples":49563823,"opsSec":99126576.4242404},{"name":"Length = 100 - Array[length - 1]","samples":49625671,"opsSec":99251327.70780882},{"name":"Length = 10_000 - Array[length - 1]","samples":48732157,"opsSec":97463816.15482707},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48445156,"opsSec":96876358.70430312}]}-->
