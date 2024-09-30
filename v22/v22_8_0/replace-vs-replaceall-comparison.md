## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,302,978|1651491|
|Using replaceAll()|3,116,922|1558601|
|Using replaceAll(//g)|2,956,318|1478467|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:36:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3302978.280846456,"samples":1651491},{"name":"Using replaceAll()","opsSec":3116922.5865916475,"samples":1558601},{"name":"Using replaceAll(//g)","opsSec":2956318.872819495,"samples":1478467}]}-->
