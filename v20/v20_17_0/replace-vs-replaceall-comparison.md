## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,676,840|1338421|
|Using replaceAll()|2,329,552|1164777|
|Using replaceAll(//g)|2,428,599|1214300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:42:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2676840.779360966,"samples":1338421},{"name":"Using replaceAll()","opsSec":2329552.9190872745,"samples":1164777},{"name":"Using replaceAll(//g)","opsSec":2428599.1791316844,"samples":1214300}]}-->
