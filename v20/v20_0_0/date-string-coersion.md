## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,032,561|516281|
|Using brackets {}|1,046,037|523019|
|Using '' + |1,041,133|520567|
|Using date.toString()|1,154,776|577402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:16:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1032561.1549099352,"samples":516281},{"name":"Using brackets {}","opsSec":1046037.6004899911,"samples":523019},{"name":"Using '' + ","opsSec":1041133.6732614039,"samples":520567},{"name":"Using date.toString()","opsSec":1154776.6832207341,"samples":577402}]}-->
