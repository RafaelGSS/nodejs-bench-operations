## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,432,835|34716439|
|using Array.includes (first item)|78,056,093|39028051|
|Using raw comparison|95,187,231|47594144|
|Using raw comparison (first item)|97,580,075|48790614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:10:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34716439,"opsSec":69432835.36823909},{"name":"using Array.includes (first item)","samples":39028051,"opsSec":78056093.41382973},{"name":"Using raw comparison","samples":47594144,"opsSec":95187231.23135887},{"name":"Using raw comparison (first item)","samples":48790614,"opsSec":97580075.38414955}]}-->
