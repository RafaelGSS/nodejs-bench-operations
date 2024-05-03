## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,747,284|91|
|Using delete property (proto: null)|24,330,960|98|
|Using delete property (cached proto: null)|3,768,832|96|
|Using undefined assignment|908,649,650|95|
|Using undefined assignment (proto: null)|27,099,336|96|
|Using undefined property (cached proto: null)|905,793,875|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:49:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3747283.7917112224,"samples":4},{"name":"Using delete property (proto: null)","opsSec":24330959.53095083,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3768832.1686716233,"samples":5},{"name":"Using undefined assignment","opsSec":908649650.1343354,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":27099335.690648776,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":905793874.6617936,"samples":7}]}-->
