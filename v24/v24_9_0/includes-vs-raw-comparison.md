## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,517,543|34263713|
|using Array.includes (first item)|73,639,854|36819936|
|Using raw comparison|99,095,517|49547868|
|Using raw comparison (first item)|96,268,417|48145794|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34263713,"opsSec":68517543.30362406},{"name":"using Array.includes (first item)","samples":36819936,"opsSec":73639854.91555366},{"name":"Using raw comparison","samples":49547868,"opsSec":99095517.39528863},{"name":"Using raw comparison (first item)","samples":48145794,"opsSec":96268417.15467504}]}-->
