## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,152,676|7576339|
|~ (small)|15,858,059|7929030|
|Math.floor (long)|15,680,895|7840448|
|~ (long)|15,893,394|7946698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:11:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":15152676.731130945,"samples":7576339},{"name":"~ (small)","opsSec":15858059.822388379,"samples":7929030},{"name":"Math.floor (long)","opsSec":15680895.754857723,"samples":7840448},{"name":"~ (long)","opsSec":15893394.491363084,"samples":7946698}]}-->
