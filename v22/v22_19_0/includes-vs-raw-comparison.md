## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,376,009|34048141|
|using Array.includes (first item)|83,263,274|41633024|
|Using raw comparison|99,065,122|49553626|
|Using raw comparison (first item)|97,495,693|48753926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34048141,"opsSec":67376009.41673984},{"name":"using Array.includes (first item)","samples":41633024,"opsSec":83263274.0007634},{"name":"Using raw comparison","samples":49553626,"opsSec":99065122.57532239},{"name":"Using raw comparison (first item)","samples":48753926,"opsSec":97495693.7020212}]}-->
