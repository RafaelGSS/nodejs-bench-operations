## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,278,327|97|
|Using Object.getOwnPropertyNames()|89,959,212|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:29:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":87278326.78890887,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":89959212.2697022,"samples":7}]}-->
