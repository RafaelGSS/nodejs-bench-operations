## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,451,789|95|
|Using replaceAll()|3,106,426|100|
|Using replaceAll(//g)|3,097,089|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:35:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3451789.0785086383,"samples":7},{"name":"Using replaceAll()","opsSec":3106425.55521102,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3097089.3851774554,"samples":6}]}-->
