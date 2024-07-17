## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,322,150|8161076|
|~ (small)|16,276,142|8138072|
|Math.floor (long)|16,340,663|8170332|
|~ (long)|16,352,999|8176500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:26:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":16322150.234154116,"samples":8161076},{"name":"~ (small)","opsSec":16276142.111642394,"samples":8138072},{"name":"Math.floor (long)","opsSec":16340663.574020956,"samples":8170332},{"name":"~ (long)","opsSec":16352999.67193805,"samples":8176500}]}-->
