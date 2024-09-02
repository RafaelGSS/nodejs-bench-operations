## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,696,254|1348128|
|Using replaceAll()|2,542,086|1271044|
|Using replaceAll(//g)|2,445,359|1222680|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:04:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2696254.770507801,"samples":1348128},{"name":"Using replaceAll()","opsSec":2542086.922153795,"samples":1271044},{"name":"Using replaceAll(//g)","opsSec":2445359.7114493246,"samples":1222680}]}-->
