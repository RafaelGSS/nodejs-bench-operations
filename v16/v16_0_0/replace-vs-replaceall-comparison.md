## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,994,894|89|
|Using replaceAll()|1,932,926|96|
|Using replaceAll(//g)|1,790,459|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1994893.584890773,"samples":7},{"name":"Using replaceAll()","opsSec":1932925.6582696296,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1790458.6283354855,"samples":6}]}-->
