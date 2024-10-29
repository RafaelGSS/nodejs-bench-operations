## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,386,280|1693264|
|Using replaceAll()|3,316,649|1662642|
|Using replaceAll(//g)|3,081,890|1540946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3386280.1242949013,"samples":1693264},{"name":"Using replaceAll()","opsSec":3316649.8582901093,"samples":1662642},{"name":"Using replaceAll(//g)","opsSec":3081890.311124109,"samples":1540946}]}-->
