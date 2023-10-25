## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,714,166|95|
|Using delete property (proto: null)|12,232,547|92|
|Using delete property (cached proto: null)|2,750,584|98|
|Using undefined assignment|715,128,082|98|
|Using undefined assignment (proto: null)|13,405,165|96|
|Using undefined property (cached proto: null)|713,094,043|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2714166.170443191,"samples":7},{"name":"Using delete property (proto: null)","opsSec":12232546.716544235,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2750583.66303476,"samples":5},{"name":"Using undefined assignment","opsSec":715128081.5746952,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13405164.557278497,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":713094043.2178687,"samples":8}]}-->
