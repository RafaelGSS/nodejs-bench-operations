## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,811,395|1405698|
|Using replaceAll()|2,657,993|1328997|
|Using replaceAll(//g)|2,664,186|1332094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2811395.246545451,"samples":1405698},{"name":"Using replaceAll()","opsSec":2657993.138811498,"samples":1328997},{"name":"Using replaceAll(//g)","opsSec":2664186.129740006,"samples":1332094}]}-->
