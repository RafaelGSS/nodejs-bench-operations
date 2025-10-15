## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,738,664|46873018|
|Length = 10_000 - Array.at|95,164,630|47582869|
|Length = 1_000_000 - Array.at|95,225,289|47635977|
|Length = 100 - Array[length - 1]|91,994,894|45997616|
|Length = 10_000 - Array[length - 1]|91,670,531|45837466|
|Length = 1_000_000 - Array[length - 1]|90,256,348|45138039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46873018,"opsSec":93738664.57889485},{"name":"Length = 10_000 - Array.at","samples":47582869,"opsSec":95164630.85468464},{"name":"Length = 1_000_000 - Array.at","samples":47635977,"opsSec":95225289.03755772},{"name":"Length = 100 - Array[length - 1]","samples":45997616,"opsSec":91994894.93070497},{"name":"Length = 10_000 - Array[length - 1]","samples":45837466,"opsSec":91670531.99780516},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45138039,"opsSec":90256348.32328191}]}-->
