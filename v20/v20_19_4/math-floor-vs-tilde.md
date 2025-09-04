## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|102,116,412|51058362|
|~ (small)|98,252,630|49190103|
|Math.floor (long)|102,570,525|51326170|
|~ (long)|102,235,360|51118615|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:25:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":51058362,"opsSec":102116412.13647734},{"name":"~ (small)","samples":49190103,"opsSec":98252630.2652426},{"name":"Math.floor (long)","samples":51326170,"opsSec":102570525.85090134},{"name":"~ (long)","samples":51118615,"opsSec":102235360.52419746}]}-->
