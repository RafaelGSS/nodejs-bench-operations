## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|98,740,313|49374172|
|Length = 10_000 - Array.at|99,988,077|49994149|
|Length = 1_000_000 - Array.at|94,469,777|47234891|
|Length = 100 - Array[length - 1]|98,039,005|49021107|
|Length = 10_000 - Array[length - 1]|96,248,425|48124220|
|Length = 1_000_000 - Array[length - 1]|95,204,426|47602222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:25:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49374172,"opsSec":98740313.45030709},{"name":"Length = 10_000 - Array.at","samples":49994149,"opsSec":99988077.82625264},{"name":"Length = 1_000_000 - Array.at","samples":47234891,"opsSec":94469777.65439023},{"name":"Length = 100 - Array[length - 1]","samples":49021107,"opsSec":98039005.77157514},{"name":"Length = 10_000 - Array[length - 1]","samples":48124220,"opsSec":96248425.75523299},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47602222,"opsSec":95204426.86320317}]}-->
