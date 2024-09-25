## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,537,036|1268519|
|Using replaceAll()|2,201,054|1100528|
|Using replaceAll(//g)|2,294,177|1147089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:42:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2537036.9348971196,"samples":1268519},{"name":"Using replaceAll()","opsSec":2201054.835456323,"samples":1100528},{"name":"Using replaceAll(//g)","opsSec":2294177.4332232894,"samples":1147089}]}-->
