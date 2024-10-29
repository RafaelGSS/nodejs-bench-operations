## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,023,260|511669|
|Using brackets {}|1,039,678|519840|
|Using '' + |1,041,182|520856|
|Using date.toString()|1,156,117|578089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1023260.0173540774,"samples":511669},{"name":"Using brackets {}","opsSec":1039678.6733700127,"samples":519840},{"name":"Using '' + ","opsSec":1041182.9437108121,"samples":520856},{"name":"Using date.toString()","opsSec":1156117.0587575987,"samples":578089}]}-->
