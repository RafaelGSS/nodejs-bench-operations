## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,579,379|5789690|
|Object.create({})|1,857,879|928943|
|Cached Empty.prototype|14,101,916|7050959|
|Empty.prototype|1,899,890|949950|
|Empty class|1,164,663|582332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:06:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11579379.814740561,"samples":5789690},{"name":"Object.create({})","opsSec":1857879.7315182942,"samples":928943},{"name":"Cached Empty.prototype","opsSec":14101916.364054482,"samples":7050959},{"name":"Empty.prototype","opsSec":1899890.6335404569,"samples":949950},{"name":"Empty class","opsSec":1164663.797348456,"samples":582332}]}-->
