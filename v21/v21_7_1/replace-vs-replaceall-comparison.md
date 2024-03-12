## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,166,739|93|
|Using replaceAll()|3,003,614|94|
|Using replaceAll(//g)|2,977,667|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using replace(//g)","opsSec":3166739.249384589,"samples":5},{"name":"Using replaceAll()","opsSec":3003614.379647536,"samples":4},{"name":"Using replaceAll(//g)","opsSec":2977666.9312535548,"samples":5}]}-->
