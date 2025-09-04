## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,835,852|46955033|
|Length = 10_000 - Array.at|93,061,999|46531245|
|Length = 1_000_000 - Array.at|96,117,218|48058621|
|Length = 100 - Array[length - 1]|93,953,299|46976675|
|Length = 10_000 - Array[length - 1]|89,280,026|44640068|
|Length = 1_000_000 - Array[length - 1]|93,626,842|46817380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46955033,"opsSec":93835852.7254531},{"name":"Length = 10_000 - Array.at","samples":46531245,"opsSec":93061999.56326231},{"name":"Length = 1_000_000 - Array.at","samples":48058621,"opsSec":96117218.73963307},{"name":"Length = 100 - Array[length - 1]","samples":46976675,"opsSec":93953299.26521839},{"name":"Length = 10_000 - Array[length - 1]","samples":44640068,"opsSec":89280026.18556778},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46817380,"opsSec":93626842.72692531}]}-->
