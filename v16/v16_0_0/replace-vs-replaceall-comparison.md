## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,522,094|93|
|Using replaceAll()|3,102,453|99|
|Using replaceAll(//g)|3,118,337|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3522094.214629903,"samples":5},{"name":"Using replaceAll()","opsSec":3102453.1704364177,"samples":8},{"name":"Using replaceAll(//g)","opsSec":3118336.681161545,"samples":8}]}-->
