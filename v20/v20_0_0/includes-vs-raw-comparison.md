## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|75,163,096|37581578|
|using Array.includes (first item)|80,318,442|40223107|
|Using raw comparison|97,905,946|48953393|
|Using raw comparison (first item)|98,051,266|49025663|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":37581578,"opsSec":75163096.92180581},{"name":"using Array.includes (first item)","samples":40223107,"opsSec":80318442.6182984},{"name":"Using raw comparison","samples":48953393,"opsSec":97905946.35860403},{"name":"Using raw comparison (first item)","samples":49025663,"opsSec":98051266.97313727}]}-->
