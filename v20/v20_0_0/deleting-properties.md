## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,680,353|87|
|Using delete property (proto: null)|12,172,045|89|
|Using delete property (cached proto: null)|2,714,525|94|
|Using undefined assignment|716,003,439|95|
|Using undefined assignment (proto: null)|13,460,175|99|
|Using undefined property (cached proto: null)|710,239,208|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2680352.9970410094,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12172044.629932676,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2714524.850493445,"samples":6},{"name":"Using undefined assignment","opsSec":716003438.9113151,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":13460175.239197671,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":710239208.2761545,"samples":7}]}-->
