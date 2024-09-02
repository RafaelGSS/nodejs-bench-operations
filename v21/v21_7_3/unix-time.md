## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,176,110|3088056|
|Date.now()|8,335,937|4167969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:44:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6176110.5671432335,"samples":3088056},{"name":"Date.now()","opsSec":8335937.333135235,"samples":4167969}]}-->
