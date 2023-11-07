## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,396,855|96|
|Using delete property (proto: null)|23,454,152|96|
|Using delete property (cached proto: null)|3,424,700|95|
|Using undefined assignment|846,843,872|100|
|Using undefined assignment (proto: null)|25,880,444|95|
|Using undefined property (cached proto: null)|844,730,175|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:35:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3396855.3768691267,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23454151.61505042,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3424700.3380157514,"samples":5},{"name":"Using undefined assignment","opsSec":846843872.0626692,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":25880443.85587047,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":844730174.9922055,"samples":9}]}-->
