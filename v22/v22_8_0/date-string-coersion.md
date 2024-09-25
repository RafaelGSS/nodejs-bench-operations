## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|873,702|436855|
|Using brackets {}|874,296|437149|
|Using '' + |871,236|435619|
|Using date.toString()|932,886|466444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":873702.7465198999,"samples":436855},{"name":"Using brackets {}","opsSec":874296.816202168,"samples":437149},{"name":"Using '' + ","opsSec":871236.5067010903,"samples":435619},{"name":"Using date.toString()","opsSec":932886.7536634401,"samples":466444}]}-->
