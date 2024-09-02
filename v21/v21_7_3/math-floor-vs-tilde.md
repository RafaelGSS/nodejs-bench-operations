## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,649,343|7324672|
|~ (small)|15,333,578|7666790|
|Math.floor (long)|14,480,989|7240495|
|~ (long)|15,452,650|7726326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:18:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14649343.73632254,"samples":7324672},{"name":"~ (small)","opsSec":15333578.466562087,"samples":7666790},{"name":"Math.floor (long)","opsSec":14480989.159957154,"samples":7240495},{"name":"~ (long)","opsSec":15452650.392654877,"samples":7726326}]}-->
