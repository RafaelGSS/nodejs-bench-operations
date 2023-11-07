## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,455,710|99|
|Using dot notation|849,090,469|99|
|Using define property (writable)|4,505,435|100|
|Using define property initialized (writable)|5,721,307|94|
|Using define property (getter)|2,248,053|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:49:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849455710.3406456,"samples":9},{"name":"Using dot notation","opsSec":849090469.4449084,"samples":9},{"name":"Using define property (writable)","opsSec":4505435.374477738,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5721306.551332858,"samples":6},{"name":"Using define property (getter)","opsSec":2248052.509515246,"samples":6}]}-->
