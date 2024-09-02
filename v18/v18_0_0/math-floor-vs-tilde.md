## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,071,208|8035605|
|~ (small)|17,712,612|8856307|
|Math.floor (long)|17,533,841|8766921|
|~ (long)|17,681,907|8840954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:12:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":16071208.479064627,"samples":8035605},{"name":"~ (small)","opsSec":17712612.844345283,"samples":8856307},{"name":"Math.floor (long)","opsSec":17533841.39214465,"samples":8766921},{"name":"~ (long)","opsSec":17681907.64364201,"samples":8840954}]}-->
