## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,576,071|1288036|
|Using replaceAll()|2,407,649|1203825|
|Using replaceAll(//g)|2,379,218|1189610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2576071.402350567,"samples":1288036},{"name":"Using replaceAll()","opsSec":2407649.57625386,"samples":1203825},{"name":"Using replaceAll(//g)","opsSec":2379218.796113384,"samples":1189610}]}-->
