## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|13,864,984|6932627|
|~ (small)|15,113,717|7556859|
|Math.floor (long)|14,918,567|7459284|
|~ (long)|15,035,581|7517791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:14:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":13864984.2740752,"samples":6932627},{"name":"~ (small)","opsSec":15113717.035473589,"samples":7556859},{"name":"Math.floor (long)","opsSec":14918567.69188668,"samples":7459284},{"name":"~ (long)","opsSec":15035581.640011476,"samples":7517791}]}-->
