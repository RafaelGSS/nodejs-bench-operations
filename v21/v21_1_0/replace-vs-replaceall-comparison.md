## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,627,015|96|
|Using replaceAll()|3,291,686|93|
|Using replaceAll(//g)|3,358,053|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:06:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3627015.3867721586,"samples":5},{"name":"Using replaceAll()","opsSec":3291686.421008121,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3358053.290193173,"samples":4}]}-->
