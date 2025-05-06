## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,443,556|47721803|
|Length = 10_000 - Array.at|95,331,847|47946006|
|Length = 1_000_000 - Array.at|93,293,712|46646870|
|Length = 100 - Array[length - 1]|93,593,436|46807411|
|Length = 10_000 - Array[length - 1]|94,241,790|47120900|
|Length = 1_000_000 - Array[length - 1]|94,078,727|47045621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47721803,"opsSec":95443556.94201174},{"name":"Length = 10_000 - Array.at","samples":47946006,"opsSec":95331847.59279191},{"name":"Length = 1_000_000 - Array.at","samples":46646870,"opsSec":93293712.75823587},{"name":"Length = 100 - Array[length - 1]","samples":46807411,"opsSec":93593436.4613292},{"name":"Length = 10_000 - Array[length - 1]","samples":47120900,"opsSec":94241790.19885382},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47045621,"opsSec":94078727.45951588}]}-->
