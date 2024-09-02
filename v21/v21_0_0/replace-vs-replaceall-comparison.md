## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,620,852|1310427|
|Using replaceAll()|2,435,567|1217784|
|Using replaceAll(//g)|2,382,563|1191283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:02:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2620852.7227666695,"samples":1310427},{"name":"Using replaceAll()","opsSec":2435567.116851535,"samples":1217784},{"name":"Using replaceAll(//g)","opsSec":2382563.3176093567,"samples":1191283}]}-->
