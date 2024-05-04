## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,643,888|93|
|Using replaceAll()|3,403,109|98|
|Using replaceAll(//g)|3,345,973|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:18:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3643887.7011272837,"samples":4},{"name":"Using replaceAll()","opsSec":3403109.13862403,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3345973.203731038,"samples":5}]}-->
