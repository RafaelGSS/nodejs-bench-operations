## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,395,196|34698711|
|using Array.includes (first item)|82,033,702|41020841|
|Using raw comparison|96,423,444|48247677|
|Using raw comparison (first item)|97,306,631|48655112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34698711,"opsSec":69395196.9124062},{"name":"using Array.includes (first item)","samples":41020841,"opsSec":82033702.74580133},{"name":"Using raw comparison","samples":48247677,"opsSec":96423444.67335972},{"name":"Using raw comparison (first item)","samples":48655112,"opsSec":97306631.04995511}]}-->
