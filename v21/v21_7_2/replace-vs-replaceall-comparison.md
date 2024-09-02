## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,744,726|1372364|
|Using replaceAll()|2,506,247|1253124|
|Using replaceAll(//g)|2,473,902|1236952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2744726.1939732027,"samples":1372364},{"name":"Using replaceAll()","opsSec":2506247.203013056,"samples":1253124},{"name":"Using replaceAll(//g)","opsSec":2473902.906534842,"samples":1236952}]}-->
