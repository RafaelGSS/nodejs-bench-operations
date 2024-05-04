## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,619,894|96|
|Using replaceAll()|3,404,168|95|
|Using replaceAll(//g)|3,345,643|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:19:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3619894.170486337,"samples":4},{"name":"Using replaceAll()","opsSec":3404167.6354414695,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3345643.0318731926,"samples":6}]}-->
