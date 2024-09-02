## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|18,993,161|9496581|
|~ (small)|19,218,594|9609298|
|Math.floor (long)|19,561,552|9780777|
|~ (long)|19,706,272|9853137|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":18993161.39223922,"samples":9496581},{"name":"~ (small)","opsSec":19218594.84710024,"samples":9609298},{"name":"Math.floor (long)","opsSec":19561552.39610417,"samples":9780777},{"name":"~ (long)","opsSec":19706272.22641339,"samples":9853137}]}-->
