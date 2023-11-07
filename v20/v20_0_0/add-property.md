## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,355,466|96|
|Using dot notation|854,844,464|97|
|Using define property (writable)|4,889,726|97|
|Using define property initialized (writable)|6,435,275|97|
|Using define property (getter)|2,504,807|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":854355466.2198235,"samples":7},{"name":"Using dot notation","opsSec":854844464.1211231,"samples":8},{"name":"Using define property (writable)","opsSec":4889726.246426864,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6435275.424730058,"samples":4},{"name":"Using define property (getter)","opsSec":2504806.6204305897,"samples":4}]}-->
