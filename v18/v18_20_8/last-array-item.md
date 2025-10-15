## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,256,550|10634102|
|Length = 10_000 - Array.at|21,438,171|10719091|
|Length = 1_000_000 - Array.at|20,769,939|10384975|
|Length = 100 - Array[length - 1]|97,863,921|48931974|
|Length = 10_000 - Array[length - 1]|98,556,787|49283687|
|Length = 1_000_000 - Array[length - 1]|100,005,561|50006743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:46:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10634102,"opsSec":21256550.521307707},{"name":"Length = 10_000 - Array.at","samples":10719091,"opsSec":21438171.70967758},{"name":"Length = 1_000_000 - Array.at","samples":10384975,"opsSec":20769939.075012047},{"name":"Length = 100 - Array[length - 1]","samples":48931974,"opsSec":97863921.57674119},{"name":"Length = 10_000 - Array[length - 1]","samples":49283687,"opsSec":98556787.02993725},{"name":"Length = 1_000_000 - Array[length - 1]","samples":50006743,"opsSec":100005561.9592926}]}-->
