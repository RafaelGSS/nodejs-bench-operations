## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|54,519,859|93|
|Object.create({})|1,379,271|86|
|Cached Empty.prototype|593,628,262|98|
|Empty.prototype|1,439,485|75|
|Empty class|901,691|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":54519858.63929848,"samples":6},{"name":"Object.create({})","opsSec":1379270.8191830318,"samples":3},{"name":"Cached Empty.prototype","opsSec":593628262.3845466,"samples":9},{"name":"Empty.prototype","opsSec":1439485.328915559,"samples":3},{"name":"Empty class","opsSec":901691.2386628466,"samples":5}]}-->
