## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,378,059|97|
|Using dot notation|850,175,549|100|
|Using define property (writable)|4,727,544|96|
|Using define property initialized (writable)|6,362,473|94|
|Using define property (getter)|2,429,325|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:56:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":850378059.2921851,"samples":7},{"name":"Using dot notation","opsSec":850175549.2601446,"samples":6},{"name":"Using define property (writable)","opsSec":4727544.476907895,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6362472.599609788,"samples":5},{"name":"Using define property (getter)","opsSec":2429325.2589649577,"samples":4}]}-->
