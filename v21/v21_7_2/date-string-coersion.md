## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,061,758|530880|
|Using brackets {}|1,068,015|534008|
|Using '' + |1,086,140|543071|
|Using date.toString()|1,185,525|592763|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:09:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1061758.3988685089,"samples":530880},{"name":"Using brackets {}","opsSec":1068015.743676348,"samples":534008},{"name":"Using '' + ","opsSec":1086140.6271179772,"samples":543071},{"name":"Using date.toString()","opsSec":1185525.7462970312,"samples":592763}]}-->
