## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|134,356,376|67180305|
|~ (small)|97,960,476|48980438|
|Math.floor (long)|97,715,939|48857972|
|~ (long)|97,215,159|48607604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:22:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":134356376.69928297,"samples":67180305},{"name":"~ (small)","opsSec":97960476.32125661,"samples":48980438},{"name":"Math.floor (long)","opsSec":97715939.11420305,"samples":48857972},{"name":"~ (long)","opsSec":97215159.39242029,"samples":48607604}]}-->
