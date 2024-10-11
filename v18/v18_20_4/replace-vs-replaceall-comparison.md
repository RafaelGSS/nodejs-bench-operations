## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,371,729|1686050|
|Using replaceAll()|2,925,064|1462645|
|Using replaceAll(//g)|3,027,770|1514072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:05:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3371729.3862493224,"samples":1686050},{"name":"Using replaceAll()","opsSec":2925064.740764314,"samples":1462645},{"name":"Using replaceAll(//g)","opsSec":3027770.306533227,"samples":1514072}]}-->
