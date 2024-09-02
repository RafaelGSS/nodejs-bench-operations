## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,775,439|1387720|
|Using replaceAll()|2,450,552|1225277|
|Using replaceAll(//g)|2,536,491|1268246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:02:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2775439.800167363,"samples":1387720},{"name":"Using replaceAll()","opsSec":2450552.2307072254,"samples":1225277},{"name":"Using replaceAll(//g)","opsSec":2536491.426754252,"samples":1268246}]}-->
