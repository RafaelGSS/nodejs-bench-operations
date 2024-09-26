## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,031,812|516156|
|Using brackets {}|1,056,715|528919|
|Using '' + |1,060,341|530172|
|Using date.toString()|1,152,867|576443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1031812.150985201,"samples":516156},{"name":"Using brackets {}","opsSec":1056715.2865035625,"samples":528919},{"name":"Using '' + ","opsSec":1060341.6863344405,"samples":530172},{"name":"Using date.toString()","opsSec":1152867.9553107633,"samples":576443}]}-->
