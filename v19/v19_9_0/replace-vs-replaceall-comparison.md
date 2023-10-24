## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,269,378|94|
|Using replaceAll()|2,154,854|92|
|Using replaceAll(//g)|1,994,236|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2269378.464541263,"samples":5},{"name":"Using replaceAll()","opsSec":2154854.3720719577,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1994235.9211052463,"samples":5}]}-->
