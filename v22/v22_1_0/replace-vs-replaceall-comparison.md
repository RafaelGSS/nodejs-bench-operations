## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,891,129|1445565|
|Using replaceAll()|2,769,908|1384955|
|Using replaceAll(//g)|2,717,705|1358853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2891129.8149671317,"samples":1445565},{"name":"Using replaceAll()","opsSec":2769908.055525338,"samples":1384955},{"name":"Using replaceAll(//g)","opsSec":2717705.298832606,"samples":1358853}]}-->
