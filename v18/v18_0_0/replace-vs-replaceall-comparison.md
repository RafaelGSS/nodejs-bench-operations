## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,547,914|98|
|Using replaceAll()|3,304,514|98|
|Using replaceAll(//g)|3,262,712|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:36:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3547914.467913774,"samples":4},{"name":"Using replaceAll()","opsSec":3304514.0830329736,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3262711.8420515987,"samples":5}]}-->
