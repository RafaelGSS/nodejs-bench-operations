## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,289,886|48653698|
|Length = 10_000 - Array.at|97,293,312|48651908|
|Length = 1_000_000 - Array.at|98,250,606|49125314|
|Length = 100 - Array[length - 1]|99,084,509|49546063|
|Length = 10_000 - Array[length - 1]|97,399,585|48712843|
|Length = 1_000_000 - Array[length - 1]|97,810,116|48915834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:58:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48653698,"opsSec":97289886.15544929},{"name":"Length = 10_000 - Array.at","samples":48651908,"opsSec":97293312.21401337},{"name":"Length = 1_000_000 - Array.at","samples":49125314,"opsSec":98250606.9743701},{"name":"Length = 100 - Array[length - 1]","samples":49546063,"opsSec":99084509.9682258},{"name":"Length = 10_000 - Array[length - 1]","samples":48712843,"opsSec":97399585.05399641},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48915834,"opsSec":97810116.71450335}]}-->
