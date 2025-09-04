## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,531,404|10765861|
|Length = 10_000 - Array.at|21,609,065|10806730|
|Length = 1_000_000 - Array.at|21,608,396|10805161|
|Length = 100 - Array[length - 1]|102,705,130|51359672|
|Length = 10_000 - Array[length - 1]|102,736,228|51371080|
|Length = 1_000_000 - Array[length - 1]|102,431,950|51226632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10765861,"opsSec":21531404.36872275},{"name":"Length = 10_000 - Array.at","samples":10806730,"opsSec":21609065.01870211},{"name":"Length = 1_000_000 - Array.at","samples":10805161,"opsSec":21608396.302938275},{"name":"Length = 100 - Array[length - 1]","samples":51359672,"opsSec":102705130.84235297},{"name":"Length = 10_000 - Array[length - 1]","samples":51371080,"opsSec":102736228.42111588},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51226632,"opsSec":102431950.77913749}]}-->
