## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|89,280,169|44641630|
|Length = 10_000 - Array.at|96,162,353|48085749|
|Length = 1_000_000 - Array.at|95,915,255|47967410|
|Length = 100 - Array[length - 1]|92,845,651|46439910|
|Length = 10_000 - Array[length - 1]|93,216,228|46626169|
|Length = 1_000_000 - Array[length - 1]|93,812,735|46932604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":44641630,"opsSec":89280169.65620752},{"name":"Length = 10_000 - Array.at","samples":48085749,"opsSec":96162353.72945915},{"name":"Length = 1_000_000 - Array.at","samples":47967410,"opsSec":95915255.39803441},{"name":"Length = 100 - Array[length - 1]","samples":46439910,"opsSec":92845651.8716547},{"name":"Length = 10_000 - Array[length - 1]","samples":46626169,"opsSec":93216228.64307807},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46932604,"opsSec":93812735.15996656}]}-->
