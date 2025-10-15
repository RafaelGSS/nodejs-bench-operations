## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,967,927|50484026|
|Length = 10_000 - Array.at|97,097,135|48550306|
|Length = 1_000_000 - Array.at|97,122,636|48572628|
|Length = 100 - Array[length - 1]|98,504,607|49259066|
|Length = 10_000 - Array[length - 1]|98,737,712|49369952|
|Length = 1_000_000 - Array[length - 1]|98,944,444|49472238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:48:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50484026,"opsSec":100967927.40557759},{"name":"Length = 10_000 - Array.at","samples":48550306,"opsSec":97097135.339972},{"name":"Length = 1_000_000 - Array.at","samples":48572628,"opsSec":97122636.72064358},{"name":"Length = 100 - Array[length - 1]","samples":49259066,"opsSec":98504607.71137966},{"name":"Length = 10_000 - Array[length - 1]","samples":49369952,"opsSec":98737712.61520621},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49472238,"opsSec":98944444.53566663}]}-->
