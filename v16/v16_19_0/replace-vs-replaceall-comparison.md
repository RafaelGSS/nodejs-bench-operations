## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,466,410|90|
|Using replaceAll()|3,200,874|98|
|Using replaceAll(//g)|3,126,432|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:34:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3466410.05067969,"samples":4},{"name":"Using replaceAll()","opsSec":3200873.553429766,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3126432.295058841,"samples":5}]}-->
