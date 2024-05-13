## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,071,722|535862|
|Using brackets {}|1,086,656|543329|
|Using '' + |1,074,277|537139|
|Using date.toString()|1,171,643|585822|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:08:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1071722.7423373847,"samples":535862},{"name":"Using brackets {}","opsSec":1086656.1206408741,"samples":543329},{"name":"Using '' + ","opsSec":1074277.9457009018,"samples":537139},{"name":"Using date.toString()","opsSec":1171643.0066617653,"samples":585822}]}-->
