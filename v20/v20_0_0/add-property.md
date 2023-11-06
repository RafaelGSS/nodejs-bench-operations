## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,636,828|96|
|Using dot notation|850,543,426|100|
|Using define property (writable)|4,808,218|96|
|Using define property initialized (writable)|6,364,031|100|
|Using define property (getter)|2,458,213|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:54:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":850636827.5340086,"samples":7},{"name":"Using dot notation","opsSec":850543425.6424239,"samples":7},{"name":"Using define property (writable)","opsSec":4808218.340359648,"samples":8},{"name":"Using define property initialized (writable)","opsSec":6364030.820693319,"samples":6},{"name":"Using define property (getter)","opsSec":2458213.265689548,"samples":4}]}-->
