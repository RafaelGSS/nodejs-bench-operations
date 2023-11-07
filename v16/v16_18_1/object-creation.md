## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|68,123,429|93|
|Object.create({})|2,103,031|91|
|Cached Empty.prototype|848,911,235|100|
|Empty.prototype|2,116,173|81|
|Empty class|1,300,489|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":68123429.19507092,"samples":6},{"name":"Object.create({})","opsSec":2103031.4851912763,"samples":3},{"name":"Cached Empty.prototype","opsSec":848911234.9495606,"samples":8},{"name":"Empty.prototype","opsSec":2116172.8018522207,"samples":3},{"name":"Empty class","opsSec":1300488.6919063018,"samples":3}]}-->
