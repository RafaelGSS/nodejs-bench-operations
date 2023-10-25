## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,982,004|84|
|Using delete property (proto: null)|12,046,826|85|
|Using delete property (cached proto: null)|1,961,686|88|
|Using undefined assignment|741,970,271|89|
|Using undefined assignment (proto: null)|13,815,015|86|
|Using undefined property (cached proto: null)|635,514,254|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1982004.2885205643,"samples":7},{"name":"Using delete property (proto: null)","opsSec":12046826.2900172,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1961685.7992785156,"samples":5},{"name":"Using undefined assignment","opsSec":741970271.1217157,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":13815015.33184832,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":635514254.0737365,"samples":7}]}-->
