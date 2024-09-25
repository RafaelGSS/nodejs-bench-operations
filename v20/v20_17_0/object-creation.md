## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,692,564|6846284|
|Object.create({})|1,793,646|901273|
|Cached Empty.prototype|17,765,127|8882564|
|Empty.prototype|1,870,518|935266|
|Empty class|1,085,274|542638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:03:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":13692564.659029681,"samples":6846284},{"name":"Object.create({})","opsSec":1793646.664240789,"samples":901273},{"name":"Cached Empty.prototype","opsSec":17765127.786677826,"samples":8882564},{"name":"Empty.prototype","opsSec":1870518.842766183,"samples":935266},{"name":"Empty class","opsSec":1085274.9624778507,"samples":542638}]}-->
