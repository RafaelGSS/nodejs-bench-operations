## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,608,238|1304120|
|Using replaceAll()|2,417,085|1208543|
|Using replaceAll(//g)|2,390,640|1195321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2608238.7689105854,"samples":1304120},{"name":"Using replaceAll()","opsSec":2417085.874314033,"samples":1208543},{"name":"Using replaceAll(//g)","opsSec":2390640.2787355944,"samples":1195321}]}-->
