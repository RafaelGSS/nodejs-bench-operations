## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|880,095|440048|
|Using brackets {}|875,332|437667|
|Using '' + |878,930|439466|
|Using date.toString()|965,883|482942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:10:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":880095.314847445,"samples":440048},{"name":"Using brackets {}","opsSec":875332.7693856625,"samples":437667},{"name":"Using '' + ","opsSec":878930.6288184873,"samples":439466},{"name":"Using date.toString()","opsSec":965883.1692262036,"samples":482942}]}-->
