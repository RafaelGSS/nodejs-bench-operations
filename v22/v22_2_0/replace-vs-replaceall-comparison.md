## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,892,327|1446164|
|Using replaceAll()|2,689,353|1344677|
|Using replaceAll(//g)|2,688,534|1344268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:57:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2892327.40996558,"samples":1446164},{"name":"Using replaceAll()","opsSec":2689353.612733224,"samples":1344677},{"name":"Using replaceAll(//g)","opsSec":2688534.4406511495,"samples":1344268}]}-->
