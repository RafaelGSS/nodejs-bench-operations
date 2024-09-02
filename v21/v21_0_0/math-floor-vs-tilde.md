## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,665,336|7332669|
|~ (small)|15,679,902|7839952|
|Math.floor (long)|15,231,733|7615867|
|~ (long)|15,260,491|7630246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:15:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14665336.653742576,"samples":7332669},{"name":"~ (small)","opsSec":15679902.268107839,"samples":7839952},{"name":"Math.floor (long)","opsSec":15231733.543931117,"samples":7615867},{"name":"~ (long)","opsSec":15260491.73601813,"samples":7630246}]}-->
