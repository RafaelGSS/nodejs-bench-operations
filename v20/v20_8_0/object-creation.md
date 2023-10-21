## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,506,366|93|
|Object.create({})|1,566,145|78|
|Cached Empty.prototype|715,171,542|98|
|Empty.prototype|1,413,527|71|
|Empty class|984,172|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":50506365.558774054,"samples":6},{"name":"Object.create({})","opsSec":1566144.661878002,"samples":3},{"name":"Cached Empty.prototype","opsSec":715171542.4173375,"samples":7},{"name":"Empty.prototype","opsSec":1413527.0684528062,"samples":3},{"name":"Empty class","opsSec":984171.9329073924,"samples":3}]}-->
