## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,049,843|524922|
|Using brackets {}|1,047,629|523815|
|Using '' + |1,042,325|521163|
|Using date.toString()|1,170,187|585094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1049843.3719361366,"samples":524922},{"name":"Using brackets {}","opsSec":1047629.3940455688,"samples":523815},{"name":"Using '' + ","opsSec":1042325.6331490619,"samples":521163},{"name":"Using date.toString()","opsSec":1170187.368427495,"samples":585094}]}-->
