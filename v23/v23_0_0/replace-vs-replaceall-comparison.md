## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,323,874|1664390|
|Using replaceAll()|3,158,916|1581904|
|Using replaceAll(//g)|2,950,048|1475152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3323874.8780694357,"samples":1664390},{"name":"Using replaceAll()","opsSec":3158916.846875305,"samples":1581904},{"name":"Using replaceAll(//g)","opsSec":2950048.685086501,"samples":1475152}]}-->
