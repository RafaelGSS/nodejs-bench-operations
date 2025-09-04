## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,399,377|35286464|
|using Array.includes (first item)|80,475,749|40245398|
|Using raw comparison|96,206,580|48113660|
|Using raw comparison (first item)|95,175,572|47587793|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:06:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35286464,"opsSec":70399377.34299272},{"name":"using Array.includes (first item)","samples":40245398,"opsSec":80475749.28820407},{"name":"Using raw comparison","samples":48113660,"opsSec":96206580.55501658},{"name":"Using raw comparison (first item)","samples":47587793,"opsSec":95175572.48506871}]}-->
