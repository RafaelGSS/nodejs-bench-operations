## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,659,432|94|
|Using replaceAll()|3,185,391|96|
|Using replaceAll(//g)|3,387,033|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:16:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3659432.401757251,"samples":5},{"name":"Using replaceAll()","opsSec":3185390.811448281,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3387033.355069915,"samples":5}]}-->
