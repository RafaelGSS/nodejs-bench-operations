## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,260,536|10630279|
|Length = 10_000 - Array.at|21,193,583|10596797|
|Length = 1_000_000 - Array.at|21,194,391|10597651|
|Length = 100 - Array[length - 1]|102,747,194|51376772|
|Length = 10_000 - Array[length - 1]|93,600,914|46800468|
|Length = 1_000_000 - Array[length - 1]|102,791,954|51396999|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10630279,"opsSec":21260536.69694223},{"name":"Length = 10_000 - Array.at","samples":10596797,"opsSec":21193583.106498286},{"name":"Length = 1_000_000 - Array.at","samples":10597651,"opsSec":21194391.488941636},{"name":"Length = 100 - Array[length - 1]","samples":51376772,"opsSec":102747194.0179153},{"name":"Length = 10_000 - Array[length - 1]","samples":46800468,"opsSec":93600914.28458788},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51396999,"opsSec":102791954.49594462}]}-->
