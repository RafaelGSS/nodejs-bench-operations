## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,911,182|50023941|
|Length = 10_000 - Array.at|100,441,447|50223470|
|Length = 1_000_000 - Array.at|100,324,967|50162497|
|Length = 100 - Array[length - 1]|99,119,189|49567890|
|Length = 10_000 - Array[length - 1]|98,730,224|49365120|
|Length = 1_000_000 - Array[length - 1]|98,698,522|49351199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50023941,"opsSec":99911182.52096298},{"name":"Length = 10_000 - Array.at","samples":50223470,"opsSec":100441447.86163092},{"name":"Length = 1_000_000 - Array.at","samples":50162497,"opsSec":100324967.11290881},{"name":"Length = 100 - Array[length - 1]","samples":49567890,"opsSec":99119189.6282784},{"name":"Length = 10_000 - Array[length - 1]","samples":49365120,"opsSec":98730224.99300581},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49351199,"opsSec":98698522.30642606}]}-->
