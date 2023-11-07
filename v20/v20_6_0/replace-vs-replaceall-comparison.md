## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,708,006|94|
|Using replaceAll()|3,265,658|100|
|Using replaceAll(//g)|3,339,600|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3708005.5553733413,"samples":5},{"name":"Using replaceAll()","opsSec":3265657.5735082375,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3339600.0183813516,"samples":6}]}-->
