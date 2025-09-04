## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,972,583|46487174|
|Length = 10_000 - Array.at|99,184,634|49643927|
|Length = 1_000_000 - Array.at|100,386,487|50196786|
|Length = 100 - Array[length - 1]|99,077,098|49543792|
|Length = 10_000 - Array[length - 1]|98,697,587|49348801|
|Length = 1_000_000 - Array[length - 1]|99,099,881|49558382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46487174,"opsSec":92972583.56630908},{"name":"Length = 10_000 - Array.at","samples":49643927,"opsSec":99184634.13820653},{"name":"Length = 1_000_000 - Array.at","samples":50196786,"opsSec":100386487.7255612},{"name":"Length = 100 - Array[length - 1]","samples":49543792,"opsSec":99077098.47251445},{"name":"Length = 10_000 - Array[length - 1]","samples":49348801,"opsSec":98697587.5901522},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49558382,"opsSec":99099881.74054621}]}-->
