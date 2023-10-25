## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,971,678|89|
|Object.create({})|1,143,609|78|
|Cached Empty.prototype|596,891,483|91|
|Empty.prototype|1,181,791|78|
|Empty class|788,408|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":33971677.67556904,"samples":6},{"name":"Object.create({})","opsSec":1143608.6983008804,"samples":3},{"name":"Cached Empty.prototype","opsSec":596891483.4596708,"samples":6},{"name":"Empty.prototype","opsSec":1181791.421592888,"samples":3},{"name":"Empty class","opsSec":788407.9392128147,"samples":3}]}-->
