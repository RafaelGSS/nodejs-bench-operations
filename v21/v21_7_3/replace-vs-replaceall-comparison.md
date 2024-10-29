## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,403,134|1701568|
|Using replaceAll()|3,114,553|1557873|
|Using replaceAll(//g)|3,168,608|1584305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3403134.0397947934,"samples":1701568},{"name":"Using replaceAll()","opsSec":3114553.169739734,"samples":1557873},{"name":"Using replaceAll(//g)","opsSec":3168608.675521574,"samples":1584305}]}-->
