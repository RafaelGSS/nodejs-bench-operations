## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,389,377|1697636|
|Using replaceAll()|2,944,310|1474529|
|Using replaceAll(//g)|3,031,992|1516519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:39:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":3389377.5132304756,"samples":1697636},{"name":"Using replaceAll()","opsSec":2944310.8464019946,"samples":1474529},{"name":"Using replaceAll(//g)","opsSec":3031992.914490276,"samples":1516519}]}-->
