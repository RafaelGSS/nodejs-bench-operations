## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,873,481|95|
|Using delete property (proto: null)|15,294,919|94|
|Using delete property (cached proto: null)|2,865,804|97|
|Using undefined assignment|597,646,785|96|
|Using undefined assignment (proto: null)|16,276,364|91|
|Using undefined property (cached proto: null)|600,791,133|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2873480.9450949007,"samples":9},{"name":"Using delete property (proto: null)","opsSec":15294918.955986233,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2865804.1380866207,"samples":5},{"name":"Using undefined assignment","opsSec":597646784.8587056,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":16276364.486070713,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":600791132.6579573,"samples":7}]}-->
