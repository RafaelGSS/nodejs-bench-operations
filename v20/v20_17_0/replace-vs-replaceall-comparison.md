## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,240,986|1631338|
|Using replaceAll()|2,897,271|1448637|
|Using replaceAll(//g)|2,887,901|1444041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:30:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3240986.7655968755,"samples":1631338},{"name":"Using replaceAll()","opsSec":2897271.259181389,"samples":1448637},{"name":"Using replaceAll(//g)","opsSec":2887901.4946049815,"samples":1444041}]}-->
