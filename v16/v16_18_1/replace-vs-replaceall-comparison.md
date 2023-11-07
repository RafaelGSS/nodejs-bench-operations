## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,418,461|94|
|Using replaceAll()|3,211,110|98|
|Using replaceAll(//g)|3,077,471|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3418460.6683516265,"samples":4},{"name":"Using replaceAll()","opsSec":3211109.8962074583,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3077470.9413962457,"samples":5}]}-->
