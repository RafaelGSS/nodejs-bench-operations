## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,425,403|91|
|Using replaceAll()|3,207,289|100|
|Using replaceAll(//g)|3,113,274|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3425403.189450646,"samples":5},{"name":"Using replaceAll()","opsSec":3207288.8150915634,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3113273.644084804,"samples":5}]}-->
