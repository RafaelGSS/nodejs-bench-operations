## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|86,543,397|43432706|
|Length = 10_000 - Array.at|83,846,125|41951136|
|Length = 1_000_000 - Array.at|90,440,939|45222897|
|Length = 100 - Array[length - 1]|81,103,455|40555299|
|Length = 10_000 - Array[length - 1]|82,472,493|41237383|
|Length = 1_000_000 - Array[length - 1]|88,106,628|44053838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:48:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":43432706,"opsSec":86543397.69104846},{"name":"Length = 10_000 - Array.at","samples":41951136,"opsSec":83846125.11308701},{"name":"Length = 1_000_000 - Array.at","samples":45222897,"opsSec":90440939.31125966},{"name":"Length = 100 - Array[length - 1]","samples":40555299,"opsSec":81103455.05650626},{"name":"Length = 10_000 - Array[length - 1]","samples":41237383,"opsSec":82472493.55291264},{"name":"Length = 1_000_000 - Array[length - 1]","samples":44053838,"opsSec":88106628.94082166}]}-->
