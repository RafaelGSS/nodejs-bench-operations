## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,047,933|10523972|
|Length = 10_000 - Array.at|21,282,903|10641453|
|Length = 1_000_000 - Array.at|21,391,990|10696001|
|Length = 100 - Array[length - 1]|98,220,803|49119959|
|Length = 10_000 - Array[length - 1]|89,212,563|44606290|
|Length = 1_000_000 - Array[length - 1]|101,697,979|50851521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10523972,"opsSec":21047933.307649877},{"name":"Length = 10_000 - Array.at","samples":10641453,"opsSec":21282903.616314795},{"name":"Length = 1_000_000 - Array.at","samples":10696001,"opsSec":21391990.02048559},{"name":"Length = 100 - Array[length - 1]","samples":49119959,"opsSec":98220803.64228639},{"name":"Length = 10_000 - Array[length - 1]","samples":44606290,"opsSec":89212563.7633134},{"name":"Length = 1_000_000 - Array[length - 1]","samples":50851521,"opsSec":101697979.47458175}]}-->
