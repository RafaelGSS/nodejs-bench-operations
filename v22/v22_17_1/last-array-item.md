## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,414,535|50212991|
|Length = 10_000 - Array.at|99,275,123|49638429|
|Length = 1_000_000 - Array.at|93,379,959|46697277|
|Length = 100 - Array[length - 1]|98,787,980|49394002|
|Length = 10_000 - Array[length - 1]|98,385,095|49199441|
|Length = 1_000_000 - Array[length - 1]|94,614,830|47316601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50212991,"opsSec":100414535.34545784},{"name":"Length = 10_000 - Array.at","samples":49638429,"opsSec":99275123.06794927},{"name":"Length = 1_000_000 - Array.at","samples":46697277,"opsSec":93379959.08591472},{"name":"Length = 100 - Array[length - 1]","samples":49394002,"opsSec":98787980.88361247},{"name":"Length = 10_000 - Array[length - 1]","samples":49199441,"opsSec":98385095.69008133},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47316601,"opsSec":94614830.63833494}]}-->
