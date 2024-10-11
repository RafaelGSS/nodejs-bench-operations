## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,327,751|1663878|
|Using replaceAll()|3,156,797|1580344|
|Using replaceAll(//g)|3,013,964|1506985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3327751.307870656,"samples":1663878},{"name":"Using replaceAll()","opsSec":3156797.001465528,"samples":1580344},{"name":"Using replaceAll(//g)","opsSec":3013964.375942474,"samples":1506985}]}-->
