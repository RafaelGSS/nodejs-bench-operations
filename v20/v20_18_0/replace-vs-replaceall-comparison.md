## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,355,528|1680284|
|Using replaceAll()|2,850,673|1425338|
|Using replaceAll(//g)|2,880,638|1440321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:05:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3355528.7005527965,"samples":1680284},{"name":"Using replaceAll()","opsSec":2850673.5313167223,"samples":1425338},{"name":"Using replaceAll(//g)","opsSec":2880638.6930267806,"samples":1440321}]}-->
