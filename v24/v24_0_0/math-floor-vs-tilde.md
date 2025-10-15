## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,208,544|46606157|
|~ (small)|91,475,866|45738734|
|Math.floor (long)|96,753,600|48381078|
|~ (long)|97,656,426|48828358|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46606157,"opsSec":93208544.83286405},{"name":"~ (small)","samples":45738734,"opsSec":91475866.07463329},{"name":"Math.floor (long)","samples":48381078,"opsSec":96753600.46612518},{"name":"~ (long)","samples":48828358,"opsSec":97656426.93697627}]}-->
