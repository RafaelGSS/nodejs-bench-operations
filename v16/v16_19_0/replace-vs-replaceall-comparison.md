## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,981,250|95|
|Using replaceAll()|1,876,761|94|
|Using replaceAll(//g)|1,782,065|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1981250.0767468372,"samples":6},{"name":"Using replaceAll()","opsSec":1876761.1660707847,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1782064.8979395833,"samples":5}]}-->
