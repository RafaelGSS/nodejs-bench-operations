## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,405,641|34206639|
|using Array.includes (first item)|73,725,014|36862788|
|Using raw comparison|98,568,065|49318384|
|Using raw comparison (first item)|99,010,378|49505214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34206639,"opsSec":68405641.60460511},{"name":"using Array.includes (first item)","samples":36862788,"opsSec":73725014.8051873},{"name":"Using raw comparison","samples":49318384,"opsSec":98568065.86095878},{"name":"Using raw comparison (first item)","samples":49505214,"opsSec":99010378.69283143}]}-->
