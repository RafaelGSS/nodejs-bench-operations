## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,770,850|1385426|
|Using replaceAll()|2,446,185|1223093|
|Using replaceAll(//g)|2,515,458|1257730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2770850.6312000505,"samples":1385426},{"name":"Using replaceAll()","opsSec":2446185.681993115,"samples":1223093},{"name":"Using replaceAll(//g)","opsSec":2515458.4202931602,"samples":1257730}]}-->
