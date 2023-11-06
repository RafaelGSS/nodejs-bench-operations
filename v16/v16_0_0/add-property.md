## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,395,550|94|
|Using dot notation|842,034,078|99|
|Using define property (writable)|4,524,833|100|
|Using define property initialized (writable)|5,669,091|96|
|Using define property (getter)|2,249,679|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":844395549.7980679,"samples":6},{"name":"Using dot notation","opsSec":842034078.1325215,"samples":8},{"name":"Using define property (writable)","opsSec":4524832.658029521,"samples":9},{"name":"Using define property initialized (writable)","opsSec":5669091.298258535,"samples":5},{"name":"Using define property (getter)","opsSec":2249679.3921694695,"samples":5}]}-->
