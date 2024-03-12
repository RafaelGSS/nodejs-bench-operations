## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,521,175|87|
|Object.create({})|2,595,557|81|
|Cached Empty.prototype|820,136,952|93|
|Empty.prototype|2,496,303|89|
|Empty class|1,527,351|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Object.create(null)","opsSec":83521175.42069623,"samples":7},{"name":"Object.create({})","opsSec":2595556.762480156,"samples":3},{"name":"Cached Empty.prototype","opsSec":820136952.3836398,"samples":6},{"name":"Empty.prototype","opsSec":2496302.675067764,"samples":3},{"name":"Empty class","opsSec":1527351.434351819,"samples":3}]}-->
