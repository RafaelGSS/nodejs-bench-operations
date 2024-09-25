## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,699,186|5849594|
|Object.create({})|1,673,287|836644|
|Cached Empty.prototype|15,351,951|7675977|
|Empty.prototype|1,841,671|920836|
|Empty class|1,207,685|603843|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:04:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11699186.330340428,"samples":5849594},{"name":"Object.create({})","opsSec":1673287.5376439523,"samples":836644},{"name":"Cached Empty.prototype","opsSec":15351951.171301927,"samples":7675977},{"name":"Empty.prototype","opsSec":1841671.4877481463,"samples":920836},{"name":"Empty class","opsSec":1207685.2615107263,"samples":603843}]}-->
