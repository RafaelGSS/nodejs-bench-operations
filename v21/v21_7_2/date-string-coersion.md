## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,528|521787|
|Using brackets {}|1,043,374|521923|
|Using '' + |1,064,636|533001|
|Using date.toString()|1,181,372|590687|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:33:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1043528.1306774878,"samples":521787},{"name":"Using brackets {}","opsSec":1043374.9224827486,"samples":521923},{"name":"Using '' + ","opsSec":1064636.2377901685,"samples":533001},{"name":"Using date.toString()","opsSec":1181372.1003536626,"samples":590687}]}-->
