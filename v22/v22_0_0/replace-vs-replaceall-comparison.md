## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,666,711|1333356|
|Using replaceAll()|2,518,087|1259045|
|Using replaceAll(//g)|2,456,079|1228040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:04:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2666711.8933331813,"samples":1333356},{"name":"Using replaceAll()","opsSec":2518087.5222038976,"samples":1259045},{"name":"Using replaceAll(//g)","opsSec":2456079.115813051,"samples":1228040}]}-->
