## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,935,901|8467951|
|~ (small)|17,240,444|8620223|
|Math.floor (long)|17,497,702|8748852|
|~ (long)|17,963,903|8981952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:50:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":16935901.77328195,"samples":8467951},{"name":"~ (small)","opsSec":17240444.261700407,"samples":8620223},{"name":"Math.floor (long)","opsSec":17497702.296154886,"samples":8748852},{"name":"~ (long)","opsSec":17963903.127821814,"samples":8981952}]}-->
