## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,396,592|89|
|Using dot notation|680,659,752|100|
|Using define property (writable)|4,511,005|97|
|Using define property initialized (writable)|6,366,543|97|
|Using define property (getter)|2,476,928|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:56:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849396592.3319985,"samples":6},{"name":"Using dot notation","opsSec":680659751.9116153,"samples":7},{"name":"Using define property (writable)","opsSec":4511005.3964373525,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6366542.849661416,"samples":6},{"name":"Using define property (getter)","opsSec":2476927.606987024,"samples":4}]}-->
