## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,195,406|48619251|
|~ (small)|97,206,396|48608035|
|Math.floor (long)|97,325,993|48663011|
|~ (long)|97,185,638|48592839|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48619251,"opsSec":97195406.91730857},{"name":"~ (small)","samples":48608035,"opsSec":97206396.60264848},{"name":"Math.floor (long)","samples":48663011,"opsSec":97325993.38615796},{"name":"~ (long)","samples":48592839,"opsSec":97185638.15388836}]}-->
