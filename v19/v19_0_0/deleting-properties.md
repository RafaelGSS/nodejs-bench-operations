## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,739,151|95|
|Using delete property (proto: null)|16,970,428|97|
|Using delete property (cached proto: null)|2,767,045|97|
|Using undefined assignment|594,743,073|94|
|Using undefined assignment (proto: null)|19,014,382|96|
|Using undefined property (cached proto: null)|599,232,597|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2739150.887146375,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16970427.614856925,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2767044.869521533,"samples":5},{"name":"Using undefined assignment","opsSec":594743072.8661352,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":19014382.41770142,"samples":9},{"name":"Using undefined property (cached proto: null)","opsSec":599232597.3733352,"samples":6}]}-->
