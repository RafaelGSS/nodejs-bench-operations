## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|567,452|89|
|Using brackets {}|579,557|94|
|Using '' + |557,254|87|
|Using date.toString()|617,229|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":567452.1110172027,"samples":3},{"name":"Using brackets {}","opsSec":579557.3142243067,"samples":4},{"name":"Using '' + ","opsSec":557254.1272123803,"samples":5},{"name":"Using date.toString()","opsSec":617228.5434775515,"samples":7}]}-->
