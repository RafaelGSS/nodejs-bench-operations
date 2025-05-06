## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,610,979|47306749|
|~ (small)|95,559,701|47780466|
|Math.floor (long)|94,137,408|47068730|
|~ (long)|95,351,899|47679515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:00:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47306749,"opsSec":94610979.83416073},{"name":"~ (small)","samples":47780466,"opsSec":95559701.38216561},{"name":"Math.floor (long)","samples":47068730,"opsSec":94137408.22442548},{"name":"~ (long)","samples":47679515,"opsSec":95351899.3942595}]}-->
