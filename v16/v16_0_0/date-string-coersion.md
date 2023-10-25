## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|486,788|85|
|Using brackets {}|511,469|88|
|Using '' + |514,367|87|
|Using date.toString()|551,078|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":486787.66894347506,"samples":7},{"name":"Using brackets {}","opsSec":511468.99826294504,"samples":3},{"name":"Using '' + ","opsSec":514366.7791661602,"samples":3},{"name":"Using date.toString()","opsSec":551077.5703787683,"samples":3}]}-->
