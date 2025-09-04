## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,577,104|36799381|
|using Array.includes (first item)|80,633,340|40318608|
|Using raw comparison|98,415,954|49207985|
|Using raw comparison (first item)|100,563,892|50294782|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:06:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36799381,"opsSec":73577104.72637801},{"name":"using Array.includes (first item)","samples":40318608,"opsSec":80633340.92290193},{"name":"Using raw comparison","samples":49207985,"opsSec":98415954.25344732},{"name":"Using raw comparison (first item)","samples":50294782,"opsSec":100563892.45179047}]}-->
