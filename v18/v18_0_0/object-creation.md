## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,104,756|6617230|
|Object.create({})|1,567,337|792570|
|Cached Empty.prototype|16,517,503|8258752|
|Empty.prototype|1,746,719|873360|
|Empty class|1,114,656|557329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":13104756.625576485,"samples":6617230},{"name":"Object.create({})","opsSec":1567337.2705546513,"samples":792570},{"name":"Cached Empty.prototype","opsSec":16517503.091103531,"samples":8258752},{"name":"Empty.prototype","opsSec":1746719.1435992473,"samples":873360},{"name":"Empty class","opsSec":1114656.2300484201,"samples":557329}]}-->
