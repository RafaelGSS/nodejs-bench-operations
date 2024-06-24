## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,746,879|1373440|
|Using replaceAll()|2,630,981|1315491|
|Using replaceAll(//g)|2,541,313|1270657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2746879.693590432,"samples":1373440},{"name":"Using replaceAll()","opsSec":2630981.436819893,"samples":1315491},{"name":"Using replaceAll(//g)","opsSec":2541313.3507584273,"samples":1270657}]}-->
