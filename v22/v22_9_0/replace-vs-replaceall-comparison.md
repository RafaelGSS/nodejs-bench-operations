## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,559,957|1279979|
|Using replaceAll()|2,369,947|1184974|
|Using replaceAll(//g)|2,348,678|1174340|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2559957.0425742334,"samples":1279979},{"name":"Using replaceAll()","opsSec":2369947.725088544,"samples":1184974},{"name":"Using replaceAll(//g)","opsSec":2348678.769289815,"samples":1174340}]}-->
