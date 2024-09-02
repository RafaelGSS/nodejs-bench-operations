## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,959,226|1479614|
|Adding property in the object creation - small object|2,949,822|1474912|
|Adding property after the function creation - small class|229,774|114888|
|Adding property in the function creation - small class|234,550|117276|
|Adding property after the class creation - small class|193,651|96826|
|Adding property in the class creation - small class|196,459|98329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2959226.2312029274,"samples":1479614},{"name":"Adding property in the object creation - small object","opsSec":2949822.5960413343,"samples":1474912},{"name":"Adding property after the function creation - small class","opsSec":229774.66263986428,"samples":114888},{"name":"Adding property in the function creation - small class","opsSec":234550.94468986892,"samples":117276},{"name":"Adding property after the class creation - small class","opsSec":193651.31104660215,"samples":96826},{"name":"Adding property in the class creation - small class","opsSec":196459.57815528003,"samples":98329}]}-->
