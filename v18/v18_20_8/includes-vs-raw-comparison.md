## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,357,583|35680449|
|using Array.includes (first item)|85,662,012|42863838|
|Using raw comparison|100,160,207|50082242|
|Using raw comparison (first item)|105,396,526|52703079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35680449,"opsSec":71357583.01212358},{"name":"using Array.includes (first item)","samples":42863838,"opsSec":85662012.12725191},{"name":"Using raw comparison","samples":50082242,"opsSec":100160207.35946618},{"name":"Using raw comparison (first item)","samples":52703079,"opsSec":105396526.65460126}]}-->
