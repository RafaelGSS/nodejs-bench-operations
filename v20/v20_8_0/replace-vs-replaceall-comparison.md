## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,740,082|96|
|Using replaceAll()|3,270,415|97|
|Using replaceAll(//g)|3,381,100|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:39:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3740081.5729908245,"samples":5},{"name":"Using replaceAll()","opsSec":3270414.850509248,"samples":6},{"name":"Using replaceAll(//g)","opsSec":3381100.2512105484,"samples":5}]}-->
