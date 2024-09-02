## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,566,213|7283107|
|~ (small)|14,036,767|7018384|
|Math.floor (long)|14,854,608|7427305|
|~ (long)|14,335,647|7167824|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14566213.883422505,"samples":7283107},{"name":"~ (small)","opsSec":14036767.803531757,"samples":7018384},{"name":"Math.floor (long)","opsSec":14854608.841227822,"samples":7427305},{"name":"~ (long)","opsSec":14335647.111070773,"samples":7167824}]}-->
