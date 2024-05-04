## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,617,234|92|
|Using replaceAll()|3,253,492|98|
|Using replaceAll(//g)|3,349,531|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3617233.5041863592,"samples":4},{"name":"Using replaceAll()","opsSec":3253492.3356168806,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3349531.3360869093,"samples":5}]}-->
