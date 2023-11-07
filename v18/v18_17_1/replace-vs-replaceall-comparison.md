## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,483,242|93|
|Using replaceAll()|3,141,227|100|
|Using replaceAll(//g)|3,109,224|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:36:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3483242.021324182,"samples":4},{"name":"Using replaceAll()","opsSec":3141227.0617199005,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3109223.6998293535,"samples":6}]}-->
