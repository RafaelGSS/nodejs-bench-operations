## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,830,592|5915297|
|Object.create({})|1,816,119|908060|
|Cached Empty.prototype|15,032,491|7516246|
|Empty.prototype|1,663,107|831555|
|Empty class|1,187,213|593607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:23:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":11830592.703081714,"samples":5915297},{"name":"Object.create({})","opsSec":1816119.7680423176,"samples":908060},{"name":"Cached Empty.prototype","opsSec":15032491.462816216,"samples":7516246},{"name":"Empty.prototype","opsSec":1663107.0715803192,"samples":831555},{"name":"Empty class","opsSec":1187213.8253955892,"samples":593607}]}-->
