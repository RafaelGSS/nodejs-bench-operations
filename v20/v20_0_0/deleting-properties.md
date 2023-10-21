## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,680,086|95|
|Using delete property (proto: null)|14,180,588|94|
|Using delete property (cached proto: null)|2,766,076|91|
|Using undefined assignment|598,179,134|93|
|Using undefined assignment (proto: null)|14,905,941|91|
|Using undefined property (cached proto: null)|599,415,127|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2680085.768911378,"samples":4},{"name":"Using delete property (proto: null)","opsSec":14180587.55056651,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2766075.714674383,"samples":5},{"name":"Using undefined assignment","opsSec":598179133.9061767,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14905940.955454985,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":599415126.7463826,"samples":6}]}-->
