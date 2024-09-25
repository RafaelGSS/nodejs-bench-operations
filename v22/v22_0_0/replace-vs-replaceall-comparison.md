## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,573,521|1286761|
|Using replaceAll()|2,448,103|1224053|
|Using replaceAll(//g)|2,401,188|1200595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2573521.5727936123,"samples":1286761},{"name":"Using replaceAll()","opsSec":2448103.8456688575,"samples":1224053},{"name":"Using replaceAll(//g)","opsSec":2401188.79460466,"samples":1200595}]}-->
