## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,474,459|1237231|
|Using replaceAll()|2,366,252|1183127|
|Using replaceAll(//g)|2,285,919|1142960|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2474459.802676791,"samples":1237231},{"name":"Using replaceAll()","opsSec":2366252.397516498,"samples":1183127},{"name":"Using replaceAll(//g)","opsSec":2285919.273924771,"samples":1142960}]}-->
