## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,624,107|7312054|
|~ (small)|14,820,942|7410472|
|Math.floor (long)|14,915,634|7457818|
|~ (long)|14,044,389|7022195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:19:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14624107.532025367,"samples":7312054},{"name":"~ (small)","opsSec":14820942.310349567,"samples":7410472},{"name":"Math.floor (long)","opsSec":14915634.448652811,"samples":7457818},{"name":"~ (long)","opsSec":14044389.213488493,"samples":7022195}]}-->
