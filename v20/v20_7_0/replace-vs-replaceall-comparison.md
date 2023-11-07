## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,741,097|94|
|Using replaceAll()|3,183,231|99|
|Using replaceAll(//g)|3,381,807|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:38:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3741097.0057268133,"samples":5},{"name":"Using replaceAll()","opsSec":3183230.745073858,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3381807.2757960623,"samples":8}]}-->
