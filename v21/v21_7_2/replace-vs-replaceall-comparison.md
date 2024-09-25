## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,559,057|1279529|
|Using replaceAll()|2,359,864|1179933|
|Using replaceAll(//g)|2,384,712|1192357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:43:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2559057.0326746525,"samples":1279529},{"name":"Using replaceAll()","opsSec":2359864.5982379583,"samples":1179933},{"name":"Using replaceAll(//g)","opsSec":2384712.316394014,"samples":1192357}]}-->
