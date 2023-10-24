## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,673,852|94|
|Using replaceAll()|1,579,314|93|
|Using replaceAll(//g)|1,499,045|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1673851.7010961587,"samples":7},{"name":"Using replaceAll()","opsSec":1579313.521846713,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1499045.4042397863,"samples":6}]}-->
