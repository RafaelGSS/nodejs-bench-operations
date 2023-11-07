## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,612,910|90|
|Using replaceAll()|3,449,292|97|
|Using replaceAll(//g)|3,251,353|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:39:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3612910.0909649627,"samples":5},{"name":"Using replaceAll()","opsSec":3449292.216967881,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3251352.6419147905,"samples":4}]}-->
