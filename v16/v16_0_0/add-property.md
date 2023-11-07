## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,186,278|99|
|Using dot notation|842,731,648|97|
|Using define property (writable)|4,529,318|99|
|Using define property initialized (writable)|5,702,575|97|
|Using define property (getter)|2,246,192|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":844186277.7038971,"samples":6},{"name":"Using dot notation","opsSec":842731648.0064249,"samples":7},{"name":"Using define property (writable)","opsSec":4529318.281502425,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5702574.946049129,"samples":5},{"name":"Using define property (getter)","opsSec":2246191.6199799525,"samples":4}]}-->
