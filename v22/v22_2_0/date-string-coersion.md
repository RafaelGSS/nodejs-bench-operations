## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,346|506674|
|Using brackets {}|1,022,476|511239|
|Using '' + |1,049,257|524629|
|Using date.toString()|1,150,477|575239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:18:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using String()","opsSec":1013346.5083541025,"samples":506674},{"name":"Using brackets {}","opsSec":1022476.681005055,"samples":511239},{"name":"Using '' + ","opsSec":1049257.645351052,"samples":524629},{"name":"Using date.toString()","opsSec":1150477.7975160368,"samples":575239}]}-->
