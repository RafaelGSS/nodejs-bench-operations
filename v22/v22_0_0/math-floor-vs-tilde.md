## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|127,704,433|64123577|
|~ (small)|98,105,480|49052751|
|Math.floor (long)|97,532,130|48766082|
|~ (long)|97,167,737|48583872|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:22:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":127704433.90891182,"samples":64123577},{"name":"~ (small)","opsSec":98105480.80921614,"samples":49052751},{"name":"Math.floor (long)","opsSec":97532130.44894712,"samples":48766082},{"name":"~ (long)","opsSec":97167737.1982584,"samples":48583872}]}-->
