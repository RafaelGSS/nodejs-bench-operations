## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,407,795|8203898|
|Length = 10_000 - Array.at|16,405,417|8202709|
|Length = 1_000_000 - Array.at|16,413,302|8206652|
|Length = 100 - Array[length - 1]|16,472,552|8236277|
|Length = 10_000 - Array[length - 1]|16,270,199|8135100|
|Length = 1_000_000 - Array[length - 1]|16,514,524|8257263|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:40:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16407795.21233686,"samples":8203898},{"name":"Length = 10_000 - Array.at","opsSec":16405417.212513568,"samples":8202709},{"name":"Length = 1_000_000 - Array.at","opsSec":16413302.65412664,"samples":8206652},{"name":"Length = 100 - Array[length - 1]","opsSec":16472552.517439088,"samples":8236277},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16270199.511789674,"samples":8135100},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16514524.745181192,"samples":8257263}]}-->
