## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|102,472,660|51236341|
|~ (small)|104,571,695|52370091|
|Math.floor (long)|102,359,793|51179909|
|~ (long)|104,439,003|52219515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":51236341,"opsSec":102472660.89063185},{"name":"~ (small)","samples":52370091,"opsSec":104571695.6656567},{"name":"Math.floor (long)","samples":51179909,"opsSec":102359793.22893004},{"name":"~ (long)","samples":52219515,"opsSec":104439003.26361516}]}-->
