## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|94,492,080|47246046|
|Length = 10_000 - Array.at|96,721,116|48399088|
|Length = 1_000_000 - Array.at|93,814,739|47034719|
|Length = 100 - Array[length - 1]|94,967,534|47486430|
|Length = 10_000 - Array[length - 1]|93,381,885|46701433|
|Length = 1_000_000 - Array[length - 1]|94,278,490|47157770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47246046,"opsSec":94492080.47196618},{"name":"Length = 10_000 - Array.at","samples":48399088,"opsSec":96721116.73875637},{"name":"Length = 1_000_000 - Array.at","samples":47034719,"opsSec":93814739.612907},{"name":"Length = 100 - Array[length - 1]","samples":47486430,"opsSec":94967534.03075649},{"name":"Length = 10_000 - Array[length - 1]","samples":46701433,"opsSec":93381885.89169672},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47157770,"opsSec":94278490.06186152}]}-->
