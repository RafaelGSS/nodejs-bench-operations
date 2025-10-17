## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,510,051|47256527|
|~ (small)|91,179,507|45603091|
|Math.floor (long)|95,386,748|47703234|
|~ (long)|94,939,376|47476183|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47256527,"opsSec":94510051.79369472},{"name":"~ (small)","samples":45603091,"opsSec":91179507.43509987},{"name":"Math.floor (long)","samples":47703234,"opsSec":95386748.88817585},{"name":"~ (long)","samples":47476183,"opsSec":94939376.96408004}]}-->
