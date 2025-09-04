## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,146,551|50073287|
|Length = 10_000 - Array.at|96,690,386|48345203|
|Length = 1_000_000 - Array.at|100,710,223|50355241|
|Length = 100 - Array[length - 1]|94,196,982|47098723|
|Length = 10_000 - Array[length - 1]|99,554,008|49780837|
|Length = 1_000_000 - Array[length - 1]|99,626,471|49813245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50073287,"opsSec":100146551.96775857},{"name":"Length = 10_000 - Array.at","samples":48345203,"opsSec":96690386.8553034},{"name":"Length = 1_000_000 - Array.at","samples":50355241,"opsSec":100710223.17472644},{"name":"Length = 100 - Array[length - 1]","samples":47098723,"opsSec":94196982.17405978},{"name":"Length = 10_000 - Array[length - 1]","samples":49780837,"opsSec":99554008.34135771},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49813245,"opsSec":99626471.0709705}]}-->
