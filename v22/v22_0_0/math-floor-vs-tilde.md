## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,153,197|8076599|
|~ (small)|16,163,856|8081929|
|Math.floor (long)|16,236,512|8118257|
|~ (long)|15,972,630|7986316|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:27:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":16153197.256973926,"samples":8076599},{"name":"~ (small)","opsSec":16163856.7068917,"samples":8081929},{"name":"Math.floor (long)","opsSec":16236512.37635737,"samples":8118257},{"name":"~ (long)","opsSec":15972630.722171329,"samples":7986316}]}-->
