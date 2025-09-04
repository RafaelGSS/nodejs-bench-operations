## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,686,404|37344376|
|using Array.includes (first item)|87,356,267|43739709|
|Using raw comparison|98,116,441|49073432|
|Using raw comparison (first item)|100,198,153|50099081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37344376,"opsSec":74686404.15819888},{"name":"using Array.includes (first item)","samples":43739709,"opsSec":87356267.15295605},{"name":"Using raw comparison","samples":49073432,"opsSec":98116441.81981646},{"name":"Using raw comparison (first item)","samples":50099081,"opsSec":100198153.18256253}]}-->
