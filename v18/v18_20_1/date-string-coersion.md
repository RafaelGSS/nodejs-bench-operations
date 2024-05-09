## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,015,283|507642|
|Using brackets {}|1,040,567|520284|
|Using '' + |1,020,026|510014|
|Using date.toString()|1,135,386|567694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1015283.4180819185,"samples":507642},{"name":"Using brackets {}","opsSec":1040567.2974074874,"samples":520284},{"name":"Using '' + ","opsSec":1020026.2081525082,"samples":510014},{"name":"Using date.toString()","opsSec":1135386.058560178,"samples":567694}]}-->
