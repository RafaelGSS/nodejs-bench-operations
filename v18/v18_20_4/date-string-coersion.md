## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,005,123|502627|
|Using brackets {}|1,022,441|511226|
|Using '' + |1,026,234|513198|
|Using date.toString()|1,116,785|558404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:16:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1005123.9972621942,"samples":502627},{"name":"Using brackets {}","opsSec":1022441.5342884549,"samples":511226},{"name":"Using '' + ","opsSec":1026234.2777926312,"samples":513198},{"name":"Using date.toString()","opsSec":1116785.6575861343,"samples":558404}]}-->
