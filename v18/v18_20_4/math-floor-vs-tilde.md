## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|144,744,209|72484811|
|~ (small)|99,437,812|49719874|
|Math.floor (long)|98,911,613|49455819|
|~ (long)|101,994,984|50997526|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:29:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":144744209.2375586,"samples":72484811},{"name":"~ (small)","opsSec":99437812.34354493,"samples":49719874},{"name":"Math.floor (long)","opsSec":98911613.66774304,"samples":49455819},{"name":"~ (long)","opsSec":101994984.47932029,"samples":50997526}]}-->
