## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,334,602|64669041|
|~ (small)|90,908,039|45454970|
|Math.floor (long)|95,267,474|47637884|
|~ (long)|98,049,894|49025037|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:22:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":129334602.12319528,"samples":64669041},{"name":"~ (small)","opsSec":90908039.29471442,"samples":45454970},{"name":"Math.floor (long)","opsSec":95267474.20423073,"samples":47637884},{"name":"~ (long)","opsSec":98049894.37259352,"samples":49025037}]}-->
