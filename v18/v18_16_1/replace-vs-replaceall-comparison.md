## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,732,965|87|
|Using replaceAll()|1,638,165|92|
|Using replaceAll(//g)|1,538,525|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1732965.4053497321,"samples":5},{"name":"Using replaceAll()","opsSec":1638164.632416828,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1538524.930299409,"samples":5}]}-->
