## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,454,567|98|
|Using delete property (proto: null)|16,109,292|95|
|Using delete property (cached proto: null)|2,482,677|97|
|Using undefined assignment|590,045,262|96|
|Using undefined assignment (proto: null)|18,458,565|96|
|Using undefined property (cached proto: null)|595,658,371|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2454567.1008273573,"samples":5},{"name":"Using delete property (proto: null)","opsSec":16109291.71466746,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2482676.785765849,"samples":5},{"name":"Using undefined assignment","opsSec":590045261.8655419,"samples":10},{"name":"Using undefined assignment (proto: null)","opsSec":18458565.21209397,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":595658370.73484,"samples":9}]}-->
